
import { useState } from "react";
import GiftOptionsCard from "../cards/giftOptions";
import box from "./../icons/gift-box_4530596.png"

const GiftList = () =>{

    const [showCard, setShowCard] = useState (false);

    const toggleCard = () => {
        setShowCard(!showCard)
    };

    return(
        <>
        <div className="flex flex-col items-center pt-20 md:pt-32 z-[-10]">
        <img src={box} alt="" className="h-16 md:h-28"/>
        <h2 className="font-juana py-2 md:text-2xl md:py-4">REGALOS</h2>
        <p className="font-julius text-center text-xs pb-6 w-3/4 md:text-2xl md:w-2/3 md:px-36">Tu presencia es nuestro mejor regalo pero si queres obsequiarnos algo, podes hacerlo de la siguiente manera:</p>
        <button className="bg-musgo hover:bg-musgo2 rounded-full py-2 w-4/6 md:w-2/6 font-julius text-white" onClick={toggleCard}>
            VER OPCIONES
        </button>
        </div>       
            {showCard && <GiftOptionsCard closeCard = {toggleCard}/>} 
        </>
    )
}; 

export default GiftList;

// Este componente puede:
// mostrar una ventana emergente con opcion a: 
// datos bancarios
// lista de regalos