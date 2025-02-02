from fastapi import FastAPI, HTTPException, Query, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, field_validator
from typing import List, Optional
import logging
import joblib
import numpy as np

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Define the FastAPI app
app = FastAPI()

# Allow CORS for all origins (or specify specific domains for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development, or replace with specific URLs for production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# Define a model for the input data
class SymptomInput(BaseModel):
    symptoms: List[str] = Field(..., example=["fever", "cough", "headache"])

    @field_validator('symptoms')
    def check_non_empty(cls, v):
        if not v:
            raise ValueError('Symptoms list cannot be empty.')
        return v

# Load the pre-trained model and encoders
try:
    model = joblib.load('model.joblib')
    encoder = joblib.load('symptom_encoders.joblib')
    logger.info("Model and encoder loaded successfully.")
    logger.info(f"Encoder type: {type(encoder)}")  # Log the encoder type
except Exception as e:
    logger.error(f"Error loading model or encoder: {e}")
    raise HTTPException(status_code=500, detail="Internal server error. Model or encoder failed to load.")

# Prediction function
def predict_disease(symptoms: List[str]) -> str:
    try:
        # Log the type of encoder and check if 'transform' method is available
        logger.info(f"Encoder type: {type(encoder)}")

        if not hasattr(encoder, 'transform'):
            logger.error(f"Encoder does not have a 'transform' method.")
            raise HTTPException(status_code=500, detail="Encoder is not valid.")

        # Transform the symptoms using the encoder
        symptom_values = encoder.transform([symptoms]).toarray()

        # Predict the disease
        prediction = model.predict(symptom_values)
        disease = prediction[0]

        return disease
    except Exception as e:
        logger.error(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail="Error during prediction.")

# Define the prediction endpoint
@app.post("/predict/")
async def predict(input_data: SymptomInput):
    try:
        # Validate symptoms list
        if not input_data.symptoms:
            logger.warning("Empty symptoms list received.")
            raise HTTPException(status_code=400, detail="Symptoms list cannot be empty.")

        # Perform prediction
        disease = predict_disease(input_data.symptoms)

        # Log the successful prediction
        logger.info(f"Prediction successful: Disease - {disease}")
        return {"predicted_disease": disease}
    
    except HTTPException as http_err:
        logger.error(f"HTTPException: {http_err.detail}")
        raise http_err
    except Exception as err:
        logger.error(f"Unexpected error: {err}")
        raise HTTPException(status_code=500, detail="Internal server error.")

# Endpoint to check if the API is running
@app.get("/health")
def health_check():
    return {"status": "API is running."}
