import {useEffect, useState} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'
import io from "socket.io-client";
import useRealTimeData from '@/hooks/useRealTimeData';

const socket = io("http://192.168.1.8:8800"); // Reemplaza la URL con la dirección de tu servidor Next.js

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Analisis',
      },
    },
  };

export interface EspData {
    temp: number
    hum: number,
    fah: number,
    heatIndex: number
}

interface ChartProps {
    espData: EspData
}
  

const Chart = ({espData}: ChartProps) => {

    const [fahData, setFahData] = useState<number[]>([]);
    const [temperatureData, setTemperatureData] = useState<number[]>([]);
    const [humidityData, setHumidityData] = useState<number[]>([]);

    const labels = temperatureData.map((_, index) => {
        const date = new Date(); // Puedes usar la fecha correspondiente al dato en tu caso
        date.setSeconds(date.getSeconds() + index); // Ajusta los segundos según el índice
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      });
    
    const data = {
        labels,
        datasets: [
          {
            label: 'Centigrados',
            data: temperatureData,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Fahrenheits',
            data: fahData,
            borderColor: 'rgb(255, 99, 10)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Humedad',
            data: humidityData,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


    useEffect(() => {
        setTemperatureData(prevData => {
            const newData = [...prevData, espData.temp];
            return newData.slice(Math.max(newData.length - 10, 0));
          });
      
          setHumidityData(prevData => {
            const newData = [...prevData, espData.hum];
            return newData.slice(Math.max(newData.length - 10, 0));
          });
          setFahData(prevData => {
            const newData = [...prevData, espData.fah];
            return newData.slice(Math.max(newData.length - 10, 0));
          });
       
    }, [espData]);
    return (
        <Line options={options} data={data} />
    )
}

export default Chart