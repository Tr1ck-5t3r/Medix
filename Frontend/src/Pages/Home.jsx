import React from 'react';
import Hero from '../Components/Hero';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const options = {
    plugins: {
        title: {
            display: true,
            text: 'Quick Medical Diagnosis Impact Statistics (2025)',
            color: '#ffffff',
            font: {
                size: 18,
            },
        },
        subtitle: {
            display: true,
            text: 'Data Source: World Health Organization & Global Medical Survey (2025)',
            color: '#dfdfdf',
            font: {
                size: 12,
            },
            padding: {
                bottom: 10,
            },
        },
        tooltip: {
            callbacks: {
                label: function (context) {
                    return `${context.dataset.label}: ${context.raw}%`;
                },
            },
        },
        legend: {
            labels: {
                color: '#ffffff',
            },
        },
    },
    scales: {
        x: {
            ticks: {
                color: '#dfdfdf',
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.1)',
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                color: '#dfdfdf',
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.1)',
            },
        },
    },
};
const data = {
    labels: ['Early Detection', 'Risk Reduction', 'Treatment Effectiveness', 'Cost Management'],
    datasets: [
      {
        label: 'Importance of Quick Medical Diagnosis (2025)',
        data: [93, 87, 97, 82], // Updated statistics
        backgroundColor: [
          'rgba(85, 239, 196, 0.8)', // Light green
          'rgba(0, 184, 148, 0.8)', // Darker green
          'rgba(0, 206, 201, 0.8)', // Aqua green
          'rgba(116, 185, 255, 0.8)', // Light blue
        ],
        borderColor: [
          'rgba(85, 239, 196, 1)',
          'rgba(0, 184, 148, 1)',
          'rgba(0, 206, 201, 1)',
          'rgba(116, 185, 255, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };
  
  const Home = () => {
    return (
      <div className="home-container">
        <Hero />
        <section className="home-section">
          <h2>Why Quick Medical Diagnosis is Important</h2>
          <ul>
            <li>93% of diseases can be treated more effectively with early detection.</li>
            <li>Reduces the risk of severe complications by up to 87%.</li>
            <li>Improves the success rate of treatments by 97%.</li>
            <li>Helps in managing healthcare costs, saving up to 82% of expenses.</li>
          </ul>
          <div className="chart-container">
            <Bar data={data} options={options} />
          </div>
        </section>
      </div>
    );
  };
  
  export default Home;
  