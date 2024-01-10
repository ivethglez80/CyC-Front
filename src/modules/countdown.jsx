import React, { useState, useEffect } from "react";

const CountDown = ({ weddingDate }) => {

    const calculateTimeLeft = () => {
        const difference = +new Date(weddingDate) - +new Date();
        let timeLeft = {};


        if (difference > 0) {
            timeLeft = {
                Dias: Math.floor(difference / (1000 * 60 * 60 * 24)).toString().padStart(2,'0') || "00",
                horas: Math.floor((difference / (1000 * 60 * 60)) % 24).toString().padStart(2,'0') || "00",
                minutos: Math.floor((difference / 1000 / 60) % 60).toString().padStart(2,'0') || "00",
                segundos: Math.floor((difference / 1000) % 60).toString().padStart(2,'0') || "00"
            };
        } else {
            timeLeft = {
                Dias: "00",
                horas: "00",
                minutos: "00",
                segundos: "00"
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(
            <span key={interval}>
                <span className="border border-white rounded-full p-4">{timeLeft[interval]}</span>

            </span>
        );
    });


    return (
        <>
            <div className="bg-musgo flex flex-col pt-8 pb-4 md:mt-16 md:px-40 md:pt-16 md:pb-12">
                <div className=" text-white flex justify-around md:text-3xl">
                    {timerComponents.length ? timerComponents : <span>Es el dia de tu boda!</span>}
                </div>
                <div className="font-seasons text-sm grid grid-cols-4 text-white md:text-xl md:pt-3">
                    <div className="pt-4 col-start-1 text-center">Dias</div>
                    <div className="pt-4 col-start-2 text-center">horas</div>
                    <div className="pt-4 col-start-3 text-center">minutos</div>
                    <div className="pt-4 col-start-4 text-center">segundos</div>
                </div>
            </div>
        </>
    )
};

export default CountDown;