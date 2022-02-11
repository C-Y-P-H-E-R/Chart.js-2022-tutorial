import './App.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import {Bar} from 'react-chartjs-2'
import { useState, useEffect } from 'react';

ChartJS.register (
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function App() {


  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({})


  useEffect(() => {
    setChartData({
      labels: ["John", "Kevin", "George", "Michael","Oreo"],
      datasets: [
        {
          label: "Who let the dog out ?",
          data: [12,55,34,120,720],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgba(53,162,235,0.4)",
        },
      ],
    });

    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "Who let the dog out ??",
        }
      }
    })
  }, [])

  return (
    <div className="App">
      {/* <h2>Hello Cedt!!</h2> */}
      <Bar options={chartOptions} data={chartData} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
