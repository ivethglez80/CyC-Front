/* este modulo es el formulario que confirma a los asistentes via e-mail, un mail por cada confirmante */

import React, {useState} from "react";


/* este form envia la info por mail */
const AttConfForm = () =>{

    const [state, setState] = useState({
        nombre: "",
        apellido: "",
        email: "",
        telefono: "", 
        cantPers:""
    })

    // const baseUrl = process.env.REACT_APP_BASE_URL || "http://localhost:3001"; con create-react-app
    const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3001"; // con vite

    const sendEmail = async () => {
        let dataSend = {
            nombre: state.nombre,
            apellido: state.apellido,
            email: state.email,
            telefono: state.telefono, 
            cantPers: state.cantPers
        }

        const res = await fetch(`${baseUrl}/email/sendEmail`,{
            method: "POST",
            body: JSON.stringify(dataSend),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res)=>{
            console.log(res);
            if(res.status > 199 && res.status < 300 ){
                alert ("Email sent succesfully")
            }
        })
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(state);
        await sendEmail();
    }




    return(
        <>        
        <div className="bg-yellow-100">
        <div>
            <form onSubmit={handleSubmit} >
                <div >
                    <label >Nombre: </label> <br />
                    <input type="text" name="nombre" value={state.nombre} onChange={handleInput}  />
                </div>
                <div >
                    <label >Apellido: </label> <br />
                    <input type="text" name="apellido" value={state.apellido} onChange={handleInput}  />
                </div>
                <div >
                    <label >Correo electronico: </label> <br />
                    <input type="email" name="email" value={state.email} onChange={handleInput}  />
                </div>
                <div >
                    <label >telefono:</label> <br />
                    <textarea
                        name="telefono"
                        value={state.telefono}
                        onChange={handleInput}                                                 
                    />
                </div>
                <div>
                    <label>cant personas:</label><br />
                    <input type="text" name="cantPers" value={state.cantPers} onChange={handleInput} />
                </div>
                <div >
                    <label ></label>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div> 
        </div>
        </>
    )
};

export default AttConfForm;





