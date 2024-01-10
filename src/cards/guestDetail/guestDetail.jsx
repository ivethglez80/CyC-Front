import { FaCheckCircle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { putAsiste } from "../../redux/actions";
import { useDispatch } from "react-redux";

const GuestDetail = ({ id, nombre, apellido, telefono, email, cantidad, asiste, closeDetail }) => {

    const dispatch = useDispatch();

    const toggleAsiste = () => {
        dispatch(putAsiste(id, asiste))
    }

    return (
        <>
            <div className="absolute inset-0 z-50 flex justify-center items-center">
                <div className="bg-white rounded-3xl w-5/6 h-1/3 flex justify-center items-center">
                    <div>
                        <div className="flex justify-end">
                        <button onClick={closeDetail}>
                            X
                        </button>
                        </div>
                        <h2>Nombre: {nombre}</h2>
                        <h2>{apellido}</h2>
                        <div>
                            <a href={`mailto:${email}`}><p>Email: {email}</p></a>                        
                        </div>

                        <div>
                            <a href={`https://api.whatsapp.com/send?phone=${telefono}&text=Hola!`} target="_blank"><p>Telefono: {telefono}</p></a>                        
                        </div>
                        <p>Grupo familiar: {cantidad}</p>
                        
                        <div className="flex flex-row">   
                        <p>asiste : </p>                     
                            <button onClick={toggleAsiste}>
                                {asiste ? <FaCheckCircle className="text-2xl text-musgo hover:text-green-700" /> : <FaCircleXmark className="text-xl text-musgo hover:text-green-700" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default GuestDetail;