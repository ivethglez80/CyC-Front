
import { useSelector, useDispatch } from "react-redux";
import { putAsiste } from "../../redux/actions";
import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";



const Card = ({ id, nombre, apellido, telefono, email, cantidad, asiste }) => {

    const dispatch = useDispatch();

    const toggleAsiste = () => {
        dispatch(putAsiste(id, asiste))
    }


    return (
        <>
            <div className="flex flex-row gap-1 bg-[#9BBF85] my-1">
                <div className="w-1/5 flex justify-center bg-white hover:bg-grisi">
                    <span>{cantidad}</span>
                </div>

                <div className="w-3/5 bg-white hover:bg-grisi pl-2">
                    <span>{nombre}</span>
                </div>

                <div className="w-1/5 bg-white hover:bg-grisi flex justify-center">
                    <button onClick={toggleAsiste}>
                        {asiste ? <FaCheckCircle className="text-xl text-musgo" /> : <FaCircleXmark className="text-xl text-musgo" />}
                    </button>
                </div>



                {/* <p>{nombre}</p>
                <p>{apellido}</p>
                <p>{telefono}</p>
                <p>{email}</p>
                <p>{cantidad}</p>
                <button onClick={toggleAsiste}>
                    {asiste ? "asiste" : "no asiste"}
                </button> */}
            </div>
        </>
    )
};

export default Card;