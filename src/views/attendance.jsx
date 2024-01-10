import AttConfForm from "../modules/attConfForm";
import WppConfForm from "../modules/wppConfForm";
import SaveTheDate from "../components/saveTheDate";
import AttConfFormToDB from "../modules/attConfFormToDB";
import bell from "./../icons/bell_1490027.png";
import { useState } from "react";

const Attendance = () =>{

    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
        setShowForm(!showForm)
    }
    return(
        <>
        <div className="flex flex-col items-center py-12 md:pt-32 z-[-10] md:pb-48">
            <img src={bell} alt="" className="h-16 md:h-28"/>
        <h2 className="font-juana py-2 md:text-2xl md:py-4">CONFIRMA TU ASISTENCIA</h2>
        <p className="font-julius text-center text-xs pb-6 w-5/6 md:text-2xl md:w-1/3">Es muy importante para nosotros que confirmes tu asistencia en este día tan especial</p>
        <div className="border-b border-slate-400 pb-2 w-1/3 mx-auto md:mb-10" ></div>  
        <p className="font-julius text-center text-xs  w-5/6 pt-8 md:text-2xl md:w-1/3 md:pb-16">En esta ocasión, nuestra invitación no podemos extenderla a los niños, asique la boda será exclusivamente para adultos.</p>  
        <p className="font-julius text-center text-xs pb-6 w-5/6  md:text-2xl md:w-1/3 md:pb-16">¡Agradecemos tu comprensión!</p>
        <button className="bg-musgo hover:bg-musgo2 rounded-full py-2 w-4/6 md:w-2/6 font-julius text-white" onClick={toggleForm}>
            CONFIRMAR ASISTENCIA
        </button>
        {showForm && <AttConfFormToDB closeForm = {toggleForm}/>}
        </div>
        </>
    )
};

export default Attendance;

// Este componente es el view de la parte de confirmar asistencia, al clickar el buton llamara una opcion:
// AttConfForm en una ventana emergente que confirma enviando mail
// WppConfForm confirma enviando mail
// AttConfFormToDB confirma enviando a DataBase



// falta:
// envio a excel
// boton a la lista de regalo y elegir el que ha decidio obsequiar
