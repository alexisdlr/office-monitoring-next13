import io from "socket.io-client";
import {useState, useEffect} from 'react'

const socket = io("http://192.168.1.8:8800"); // Reemplaza la URL con la dirección de tu servidor Next.js
 const useRealTimeData = () => {
    const [data, setData] = useState({
        ESP32A69EF0C860CF: {
            temp: 0,
            hum: 0,
            fah: 0,
            heatIndex: 0,
            device: ''
        },
        ESP32B8F23A0824C3: {
            temp: 0,
            hum: 0,
            fah: 0,
            heatIndex: 0,
            device: ''
        },
    })

    useEffect(() => {

    socket.on("ESP32A69EF0C860CF/data", (data) => {
     
      setData((prevData) => ({
        ...prevData,
        ESP32A69EF0C860CF: data,
      }));    
    });
    socket.on("ESP32B8F23A0824C3/data", (data) => {
     
        setData((prevData) => ({
          ...prevData,
          ESP32B8F23A0824C3: data,
        }));    
      });
 
    
      return () => {
        socket.off('data'); 
      }
    }, [])
    return {data}
}

export default useRealTimeData