import useRealTimeData from "@/hooks/useRealTimeData";
import Chart, { EspData } from "./Chart";
import { motion } from "framer-motion";
const RealTimeData = () => {
    const { data } = useRealTimeData();
    console.log(data)
    return (
        <>
            <div className="flex w-full flex-col xl:grid xl:grid-cols-2 2xl:gap-10 gap-5 justify-center items-center">
                <div className=" flex flex-col items-center justify-center gap-6 2xl:gap-5 rounded-xl bg-slate-800 bg-opacity-80 p-5">
                    <h2 className="text-md 2xl:text-2xl text-center text-white">Dispositivo: <span className="text-slate-500">
                        {data.ESP32B8F23A0824C3.device}</span>
                    </h2>
                    <div className="flex flex-wrap xl:grid xl:grid-cols-2 2xl:gap-10 gap-5 justify-center items-center">
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/temp.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {data !== null ? (
                                <p className="text-1g 2xl:text-xl text-white">
                                    Centigrados:{" "}
                                    <span className="text-red-500 font-bold">
                                        {Number(data.ESP32B8F23A0824C3.temp?.toFixed(1))} C°
                                    </span>
                                </p>
                            ) : (
                                <p>Cargando...</p>
                            )}
                        </motion.div>
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/temp.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {
                                data ? (
                                    <p className="text-1g 2xl:text-xl text-white">
                                        Fahrenheits:{" "}
                                        <span className="text-red-500 font-bold">{Number(data.ESP32B8F23A0824C3.fah?.toFixed(1))} F°</span>
                                    </p>
                                ) : 'cargando...'
                            }
                        </motion.div>
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/humidity.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {
                                data ? (
                                    <p className="text-1g 2xl:text-xl text-white">
                                        Humedad:{" "}
                                        <span className="text-sky-500 font-bold">{Number(data.ESP32B8F23A0824C3.hum?.toFixed(1))} %</span>
                                    </p>
                                ) : 'cargando...'
                            }
                        </motion.div>
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/ic.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {
                                data !== null ? (
                                    <p className="text-1g 2xl:text-xl text-white">
                                        Indice de calor:{" "}
                                        <span className="text-sky-500 font-bold">{Number(data.ESP32B8F23A0824C3.heatIndex?.toFixed(1))} %</span>
                                    </p>
                                ) : 'cargando...'
                            }
                        </motion.div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 2xl:gap-5 rounded-xl bg-slate-800 bg-opacity-80 p-5">
                    <h2 className="text-md 2xl:text-2xl text-center text-white">Dispositivo: <span className="text-slate-500">
                        {data.ESP32A69EF0C860CF.device}</span>
                    </h2>                   
                     <div className="flex flex-wrap xl:grid xl:grid-cols-2 2xl:gap-10 gap-5 justify-center items-center">
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/temp.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {data !== null ? (
                                <p className="text-1g 2xl:text-xl text-white">
                                    Centigrados:{" "}
                                    <span className="text-red-500 font-bold">
                                        {Number(data.ESP32A69EF0C860CF.temp?.toFixed(1))} C°
                                    </span>
                                </p>
                            ) : (
                                <p>Cargando...</p>
                            )}
                        </motion.div>
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-1 2xl:gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/temp.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {
                                data ? (
                                    <p className="text-1g 2xl:text-xl text-white">
                                        Fahrenheits:{" "}
                                        <span className="text-red-500 font-bold">{Number(data.ESP32A69EF0C860CF.fah?.toFixed(1))} F°</span>
                                    </p>
                                ) : 'cargando...'
                            }
                        </motion.div>
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/humidity.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {
                                data ? (
                                    <p className="text-1g 2xl:text-xl text-white">
                                        Humedad:{" "}
                                        <span className="text-sky-500 font-bold">{Number(data.ESP32A69EF0C860CF.hum?.toFixed(1))} %</span>
                                    </p>
                                ) : 'cargando...'
                            }
                        </motion.div>
                        <motion.div
                            animate={{ opacity: [0, 1], y: [-50, 0] }}
                            transition={{ duration: 0.3 }}
                            className="flex w-[85%] lg:w-auto gap-2 justify-center items-center py-2 px-4 bg-slate-700 rounded-xl">
                            <img src="/ic.png" className="w-14 2xl:w-20 object-cover" alt="temperature icon" />
                            {
                                data !== null ? (
                                    <p className="text-1g 2xl:text-xl text-white">
                                        Indice de calor:{" "}
                                        <span className="text-sky-500 font-bold">{Number(data.ESP32A69EF0C860CF.heatIndex?.toFixed(1))} %</span>
                                    </p>
                                ) : 'cargando...'
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
            <Chart espData={data.ESP32A69EF0C860CF as EspData} />
            
        </>
    );
};

export default RealTimeData;