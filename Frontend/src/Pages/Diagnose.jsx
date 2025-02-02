import React, { useState } from 'react';
// Create a CSS file for external styling


const symptoms = [
  {
      "serial": 0,
      "name": "itching",
      "weight": "1"
  },
  {
      "serial": 1,
      "name": "skin_rash",
      "weight": "3"
  },
  {
      "serial": 2,
      "name": "nodal_skin_eruptions",
      "weight": "4"
  },
  {
      "serial": 3,
      "name": "continuous_sneezing",
      "weight": "4"
  },
  {
      "serial": 4,
      "name": "shivering",
      "weight": "5"
  },
  {
      "serial": 5,
      "name": "chills",
      "weight": "3"
  },
  {
      "serial": 6,
      "name": "joint_pain",
      "weight": "3"
  },
  {
      "serial": 7,
      "name": "stomach_pain",
      "weight": "5"
  },
  {
      "serial": 8,
      "name": "acidity",
      "weight": "3"
  },
  {
      "serial": 9,
      "name": "ulcers_on_tongue",
      "weight": "4"
  },
  {
      "serial": 10,
      "name": "muscle_wasting",
      "weight": "3"
  },
  {
      "serial": 11,
      "name": "vomiting",
      "weight": "5"
  },
  {
      "serial": 12,
      "name": "burning_micturition",
      "weight": "6"
  },
  {
      "serial": 13,
      "name": "spotting_urination",
      "weight": "6"
  },
  {
      "serial": 14,
      "name": "fatigue",
      "weight": "4"
  },
  {
      "serial": 15,
      "name": "weight_gain",
      "weight": "3"
  },
  {
      "serial": 16,
      "name": "anxiety",
      "weight": "4"
  },
  {
      "serial": 17,
      "name": "cold_hands_and_feets",
      "weight": "5"
  },
  {
      "serial": 18,
      "name": "mood_swings",
      "weight": "3"
  },
  {
      "serial": 19,
      "name": "weight_loss",
      "weight": "3"
  },
  {
      "serial": 20,
      "name": "restlessness",
      "weight": "5"
  },
  {
      "serial": 21,
      "name": "lethargy",
      "weight": "2"
  },
  {
      "serial": 22,
      "name": "patches_in_throat",
      "weight": "6"
  },
  {
      "serial": 23,
      "name": "irregular_sugar_level",
      "weight": "5"
  },
  {
      "serial": 24,
      "name": "cough",
      "weight": "4"
  },
  {
      "serial": 25,
      "name": "high_fever",
      "weight": "7"
  },
  {
      "serial": 26,
      "name": "sunken_eyes",
      "weight": "3"
  },
  {
      "serial": 27,
      "name": "breathlessness",
      "weight": "4"
  },
  {
      "serial": 28,
      "name": "sweating",
      "weight": "3"
  },
  {
      "serial": 29,
      "name": "dehydration",
      "weight": "4"
  },
  {
      "serial": 30,
      "name": "indigestion",
      "weight": "5"
  },
  {
      "serial": 31,
      "name": "headache",
      "weight": "3"
  },
  {
      "serial": 32,
      "name": "yellowish_skin",
      "weight": "3"
  },
  {
      "serial": 33,
      "name": "dark_urine",
      "weight": "4"
  },
  {
      "serial": 34,
      "name": "nausea",
      "weight": "5"
  },
  {
      "serial": 35,
      "name": "loss_of_appetite",
      "weight": "4"
  },
  {
      "serial": 36,
      "name": "pain_behind_the_eyes",
      "weight": "4"
  },
  {
      "serial": 37,
      "name": "back_pain",
      "weight": "3"
  },
  {
      "serial": 38,
      "name": "constipation",
      "weight": "4"
  },
  {
      "serial": 39,
      "name": "abdominal_pain",
      "weight": "4"
  },
  {
      "serial": 40,
      "name": "diarrhoea",
      "weight": "6"
  },
  {
      "serial": 41,
      "name": "mild_fever",
      "weight": "5"
  },
  {
      "serial": 42,
      "name": "yellow_urine",
      "weight": "4"
  },
  {
      "serial": 43,
      "name": "yellowing_of_eyes",
      "weight": "4"
  },
  {
      "serial": 44,
      "name": "acute_liver_failure",
      "weight": "6"
  },
  {
      "serial": 45,
      "name": "fluid_overload",
      "weight": "6"
  },
  {
      "serial": 46,
      "name": "swelling_of_stomach",
      "weight": "7"
  },
  {
      "serial": 47,
      "name": "swelled_lymph_nodes",
      "weight": "6"
  },
  {
      "serial": 48,
      "name": "malaise",
      "weight": "6"
  },
  {
      "serial": 49,
      "name": "blurred_and_distorted_vision",
      "weight": "5"
  },
  {
      "serial": 50,
      "name": "phlegm",
      "weight": "5"
  },
  {
      "serial": 51,
      "name": "throat_irritation",
      "weight": "4"
  },
  {
      "serial": 52,
      "name": "redness_of_eyes",
      "weight": "5"
  },
  {
      "serial": 53,
      "name": "sinus_pressure",
      "weight": "4"
  },
  {
      "serial": 54,
      "name": "runny_nose",
      "weight": "5"
  },
  {
      "serial": 55,
      "name": "congestion",
      "weight": "5"
  },
  {
      "serial": 56,
      "name": "chest_pain",
      "weight": "7"
  },
  {
      "serial": 57,
      "name": "weakness_in_limbs",
      "weight": "7"
  },
  {
      "serial": 58,
      "name": "fast_heart_rate",
      "weight": "5"
  },
  {
      "serial": 59,
      "name": "pain_during_bowel_movements",
      "weight": "5"
  },
  {
      "serial": 60,
      "name": "pain_in_anal_region",
      "weight": "6"
  },
  {
      "serial": 61,
      "name": "bloody_stool",
      "weight": "5"
  },
  {
      "serial": 62,
      "name": "irritation_in_anus",
      "weight": "6"
  },
  {
      "serial": 63,
      "name": "neck_pain",
      "weight": "5"
  },
  {
      "serial": 64,
      "name": "dizziness",
      "weight": "4"
  },
  {
      "serial": 65,
      "name": "cramps",
      "weight": "4"
  },
  {
      "serial": 66,
      "name": "bruising",
      "weight": "4"
  },
  {
      "serial": 67,
      "name": "obesity",
      "weight": "4"
  },
  {
      "serial": 68,
      "name": "swollen_legs",
      "weight": "5"
  },
  {
      "serial": 69,
      "name": "swollen_blood_vessels",
      "weight": "5"
  },
  {
      "serial": 70,
      "name": "puffy_face_and_eyes",
      "weight": "5"
  },
  {
      "serial": 71,
      "name": "enlarged_thyroid",
      "weight": "6"
  },
  {
      "serial": 72,
      "name": "brittle_nails",
      "weight": "5"
  },
  {
      "serial": 73,
      "name": "swollen_extremeties",
      "weight": "5"
  },
  {
      "serial": 74,
      "name": "excessive_hunger",
      "weight": "4"
  },
  {
      "serial": 75,
      "name": "extra_marital_contacts",
      "weight": "5"
  },
  {
      "serial": 76,
      "name": "drying_and_tingling_lips",
      "weight": "4"
  },
  {
      "serial": 77,
      "name": "slurred_speech",
      "weight": "4"
  },
  {
      "serial": 78,
      "name": "knee_pain",
      "weight": "3"
  },
  {
      "serial": 79,
      "name": "hip_joint_pain",
      "weight": "2"
  },
  {
      "serial": 80,
      "name": "muscle_weakness",
      "weight": "2"
  },
  {
      "serial": 81,
      "name": "stiff_neck",
      "weight": "4"
  },
  {
      "serial": 82,
      "name": "swelling_joints",
      "weight": "5"
  },
  {
      "serial": 83,
      "name": "movement_stiffness",
      "weight": "5"
  },
  {
      "serial": 84,
      "name": "spinning_movements",
      "weight": "6"
  },
  {
      "serial": 85,
      "name": "loss_of_balance",
      "weight": "4"
  },
  {
      "serial": 86,
      "name": "unsteadiness",
      "weight": "4"
  },
  {
      "serial": 87,
      "name": "weakness_of_one_body_side",
      "weight": "4"
  },
  {
      "serial": 88,
      "name": "loss_of_smell",
      "weight": "3"
  },
  {
      "serial": 89,
      "name": "bladder_discomfort",
      "weight": "4"
  },
  {
      "serial": 90,
      "name": "foul_smell_ofurine",
      "weight": "5"
  },
  {
      "serial": 91,
      "name": "continuous_feel_of_urine",
      "weight": "6"
  },
  {
      "serial": 92,
      "name": "passage_of_gases",
      "weight": "5"
  },
  {
      "serial": 93,
      "name": "internal_itching",
      "weight": "4"
  },
  {
      "serial": 94,
      "name": "toxic_look_(typhos)",
      "weight": "5"
  },
  {
      "serial": 95,
      "name": "depression",
      "weight": "3"
  },
  {
      "serial": 96,
      "name": "irritability",
      "weight": "2"
  },
  {
      "serial": 97,
      "name": "muscle_pain",
      "weight": "2"
  },
  {
      "serial": 98,
      "name": "altered_sensorium",
      "weight": "2"
  },
  {
      "serial": 99,
      "name": "red_spots_over_body",
      "weight": "3"
  },
  {
      "serial": 100,
      "name": "belly_pain",
      "weight": "4"
  },
  {
      "serial": 101,
      "name": "abnormal_menstruation",
      "weight": "6"
  },
  {
      "serial": 102,
      "name": "dischromic_patches",
      "weight": "6"
  },
  {
      "serial": 103,
      "name": "watering_from_eyes",
      "weight": "4"
  },
  {
      "serial": 104,
      "name": "increased_appetite",
      "weight": "5"
  },
  {
      "serial": 105,
      "name": "polyuria",
      "weight": "4"
  },
  {
      "serial": 106,
      "name": "family_history",
      "weight": "5"
  },
  {
      "serial": 107,
      "name": "mucoid_sputum",
      "weight": "4"
  },
  {
      "serial": 108,
      "name": "rusty_sputum",
      "weight": "4"
  },
  {
      "serial": 109,
      "name": "lack_of_concentration",
      "weight": "3"
  },
  {
      "serial": 110,
      "name": "visual_disturbances",
      "weight": "3"
  },
  {
      "serial": 111,
      "name": "receiving_blood_transfusion",
      "weight": "5"
  },
  {
      "serial": 112,
      "name": "receiving_unsterile_injections",
      "weight": "2"
  },
  {
      "serial": 113,
      "name": "coma",
      "weight": "7"
  },
  {
      "serial": 114,
      "name": "stomach_bleeding",
      "weight": "6"
  },
  {
      "serial": 115,
      "name": "distention_of_abdomen",
      "weight": "4"
  },
  {
      "serial": 116,
      "name": "history_of_alcohol_consumption",
      "weight": "5"
  },
  {
      "serial": 117,
      "name": "fluid_overload",
      "weight": "4"
  },
  {
      "serial": 118,
      "name": "blood_in_sputum",
      "weight": "5"
  },
  {
      "serial": 119,
      "name": "prominent_veins_on_calf",
      "weight": "6"
  },
  {
      "serial": 120,
      "name": "palpitations",
      "weight": "4"
  },
  {
      "serial": 121,
      "name": "painful_walking",
      "weight": "2"
  },
  {
      "serial": 122,
      "name": "pus_filled_pimples",
      "weight": "2"
  },
  {
      "serial": 123,
      "name": "blackheads",
      "weight": "2"
  },
  {
      "serial": 124,
      "name": "scurring",
      "weight": "2"
  },
  {
      "serial": 125,
      "name": "skin_peeling",
      "weight": "3"
  },
  {
      "serial": 126,
      "name": "silver_like_dusting",
      "weight": "2"
  },
  {
      "serial": 127,
      "name": "small_dents_in_nails",
      "weight": "2"
  },
  {
      "serial": 128,
      "name": "inflammatory_nails",
      "weight": "2"
  },
  {
      "serial": 129,
      "name": "blister",
      "weight": "4"
  },
  {
      "serial": 130,
      "name": "red_sore_around_nose",
      "weight": "2"
  },
  {
      "serial": 131,
      "name": "yellow_crust_ooze",
      "weight": "3"
  },
  {
      "serial": 132,
      "name": "prognosis",
      "weight": "5"
  }
];
const DiagnosisPage = () => {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      setSelectedSymptoms((prevSelected) =>
        checked ? [...prevSelected, name] : prevSelected.filter((symptom) => symptom !== name)
      );
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const symptomData = selectedSymptoms
        .map((symptom) => symptoms.find((item) => item.name === symptom))
        .map((item) => item.name); // Create an array with symptom names
  
      const requestData = {
        symptoms: symptomData, // Prepare the data for the API
      };
  
      try {
        // Send POST request to the API
        const response = await fetch('http://127.0.0.1:8000/predict/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestData), // Send selected symptoms
        });
  
        const data = await response.json();
        console.log('Response from server:', data); // Log the response
      } catch (error) {
        console.error('Error during the API request:', error); // Log error if request fails
      }
    };
  
    return (
      <div className="diagnosis-page">
        <h1 className="title">Diagnosis Page</h1>
        <p className="description">
          Select the symptoms you are experiencing, and we will analyze and sort them based on their significance.
        </p>
  
        <form onSubmit={handleSubmit} className="diagnosis-form">
          <div className="symptom-list">
            {symptoms.map((symptom) => (
              <label key={symptom.name} className="symptom-item">
                <input
                  type="checkbox"
                  name={symptom.name}
                  onChange={handleCheckboxChange}
                  className="symptom-checkbox"
                />
                <span className="symptom-label">{symptom.name.replace(/_/g, ' ')}</span>
              </label>
            ))}
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default DiagnosisPage;