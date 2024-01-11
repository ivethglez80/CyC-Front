
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { putAsiste } from "../../redux/actions";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import GuestDetail from "../guestDetail/guestDetail";



const Card = ({ id, nombre, apellido, telefono, email, cantidad, asiste }) => {
    const dispatch = useDispatch();

    const toggleAsiste = (e) => {
       
        dispatch(putAsiste(id, asiste));
    }

    // const [showDetail, setShowDetail] = useState(false);

    // const toggleDetail = (e) => {
    //     e.stopPropagation(); // Detiene la propagación del evento al padre
    //     setShowDetail(!showDetail);
    // }

    return (
        <>
            <div className="flex flex-row gap-1 my-1 bg-[#9BBF85]">
                <div className={`w-1/5 flex justify-center ${asiste ? 'bg-white text-black' : 'bg-stone-400 text-stone-500'}`}>
                    <span>{cantidad}</span>
                </div>

                <div className={`w-3/5 flex justify-center ${asiste ? 'bg-white text-black' : 'bg-stone-400 text-stone-500'}`}>
                    <span>{nombre}</span>
                </div>

                <div className={`w-1/5 flex justify-center hover:bg-grisi ${asiste ? 'bg-white text-black' : 'bg-stone-400 text-stone-500'}`}>
                    <button onClick={toggleAsiste}>
                        {asiste ? <FaCheckCircle className="text-2xl text-musgo hover:text-green-700" /> : <FaCircleXmark className="text-xl text-musgo hover:text-green-700" />}
                    </button>
                </div>
            </div>
           
        </>
    )
};

export default Card;