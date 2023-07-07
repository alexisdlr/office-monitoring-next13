import {useState} from 'react'
import Button from "@/components/Button";
import Navbar from "@/components/layout/Navbar";
import axios from 'axios';
import RealTimeData from '@/components/RealTimeData';
import { toast } from 'react-hot-toast';

export default function Home() {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState(!state);

    if (!state) {
      axios
        .get("http://192.168.1.8:8800/oficina/led/encender")
        .then((res: any) => {
          console.log(res.data);
        });
      
      toast.success('Led encendido');
      
      return;
    }
    axios.get("http://192.168.1.8:8800/oficina/led/apagar").then((res: any) => {
      console.log(res.data);
    });
    toast.success('Led apagado');
  };
  return (
    <>
    <Navbar />
    <main
      className={`flex flex-col items-center gap-10 justify-center flex-wrap p-5 md:py-24 md:px-5 `}
    > 
      <h1 className='text-2xl md:text-4xl 2xl:text-7xl font-bold text-slate-600 text-center'>Monitoreo de <span className="text-red-500">
        Temperatura
      </span> y <span className="text-sky-500">Humedad</span> en Tiempo Real:</h1>
      <RealTimeData />
      <Button label={!state ? "Encender LED" : "Apagar LED"} onClick={handleClick} />
    </main>
    </>


  );
}
