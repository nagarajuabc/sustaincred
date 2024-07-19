import React, { useState } from 'react';
import './home.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import * as XLSX from 'xlsx';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Home = () => {
  const [chartData, setChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        const labels = json[0];
        const values = json[1];
        setChartData({
          labels: labels,
          datasets: [{
            label: 'File Data',
            data: values,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40'
            ]
          }]
        });
        setBarChartData({
          labels: labels,
          datasets: [{
            label: 'File Data',
            data: values,
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56',
              '#4BC0C0',
              '#9966FF',
              '#FF9F40'
            ]
          }]
        });
      };
      reader.readAsArrayBuffer(file);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>SUSTAINCRED FRUITS</h3>
      </header>
      <div className="container">
        <div className="upload-card card">
          <div className="card-body">
            <h2 className="card-title">Upload File</h2>
            <label htmlFor="fileUpload" className="btn btn-primary">
              Select File
              <input
                id="fileUpload"
                type="file"
                className="form-control-file"
                accept=".pdf,.xlsx,.xls,.docx"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
        {chartData && barChartData && (
          <div className="chart-container">
            <div className="chart-card">
              <h2 className="card-title">Pie Chart</h2>
              <Pie data={chartData} />
            </div>
            <div className="chart-card">
              <h2 className="card-title">Bar Chart</h2>
              <Bar data={barChartData} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
