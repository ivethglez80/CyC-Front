import { useState } from "react";
import axios from "axios";
import SaveTheDate from "../components/saveTheDate";
import CardOne from "../cards/confirmationFormCards/cardOne";
import CardTwo from "../cards/confirmationFormCards/cardTwo";
import CardTwoT from "../cards/confirmationFormCards/cardTwoT";
import CardTwoM from "../cards/confirmationFormCards/cardTwoM";
import CardThree from "../cards/confirmationFormCards/cardThree";

const AttConfFormToDB = ({closeForm}) => {

    const [currentCard, setCurrentCard] = useState(1);
    const nextCard = () =>{
        setCurrentCard(currentCard+1);
    };
    const prevCard = () =>{
        setCurrentCard(currentCard-1);
    };

    const [form, setForm] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        cantidad: "",
    });

    const [errors, setErrors] = useState({
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        cantidad: "",
        sbmt: "",
    })

    const changeHandler = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        console.log("property",property, "value",value);
        validate({ ...form, [property]: value });
        setForm({ ...form, [property]: value });
    }

    const validate = (formData) => {
        if (formData.email.trim() === '') {
            setErrors({ ...errors, email: 'ingrese su correo electronico' });
        } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
            setErrors({ ...errors, email: '' });
        } else {
            setErrors({ ...errors, email: 'complete: suAlias@suMail.com' })
        }
       
    };

    const clearForm = () => {
        setForm({
            nombre: "",
            apellido: "",
            telefono: "",
            email: "",
            cantidad: "",
        });
    };

    const postGuestUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";

    const submitHandler = (event) => {
        event.preventDefault();
        console.log("datos en form", form);
        if (form.nombre && form.cantidad) {
            const response = axios.post("/guestsDB", form)
                .then(res => {
                    
                    nextCard();
                    clearForm();
                })
                .catch(err => alert(err))            
        } else {
            setErrors({ ...errors, sbmt: "datos incompletos" });
            clearForm();
            setTimeout(() => {
                setErrors({ ...errors, sbmt: "" });
            }, 2000)
        }
    };



    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative rounded-3xl w-11/12 max-w-2xl bg-white z-10">
            {/* <div className="flex justify-end">
                <button onClick={closeForm} className="bg-musgo text-white px-3 rounded-lg">X</button>
            </div> */}
<div>
        {currentCard===1 && (
            <CardOne form={form} onChangeHandler={changeHandler} onNext={nextCard} onPrev={prevCard} onClose={closeForm} errors={errors}/>
        )}
        {/* {currentCard===2 && (
            <CardTwoT form={form} onChangeHandler={changeHandler} onSubmit={submitHandler} onNext={nextCard} onPrev={prevCard} errors={errors}/>
        )}
        {currentCard===3 && (
            <CardTwoM form={form} onChangeHandler={changeHandler} onSubmit={submitHandler} onNext={nextCard} onPrev={prevCard} errors={errors}/>
        )} */}
         {currentCard===2 && (
            <CardTwo form={form} onChangeHandler={changeHandler} onSubmit={submitHandler} onNext={nextCard} onPrev={prevCard} errors={errors}/>
        )}
        {currentCard===3 && (
            <CardThree onClose={closeForm}/>
        )}
        </div>                 
                </div>
            </div>
        </>
    )
}

export default AttConfFormToDB;
















































// import { useState } from "react";
// import axios from "axios";
// import SaveTheDate from "../components/saveTheDate";

// const AttConfFormToDB = ({closeForm}) => {

//     const [form, setForm] = useState({
//         nombre: "",
//         apellido: "",
//         telefono: "",
//         email: "",
//         cantidad: "",
//     });

//     const [errors, setErrors] = useState({
//         nombre: "",
//         apellido: "",
//         telefono: "",
//         email: "",
//         cantidad: "",
//         sbmt: "",
//     })

//     const changeHandler = (event) => {
//         const property = event.target.name;
//         const value = event.target.value;
//         validate({ ...form, [property]: value });
//         setForm({ ...form, [property]: value });
//     }

//     const validate = (formData) => {
//         if (formData.email.trim() === '') {
//             setErrors({ ...errors, email: '' });
//         } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)) {
//             setErrors({ ...errors, email: '' });
//         } else {
//             setErrors({ ...errors, email: 'formato de email incorrecto' })
//         }
//     };

//     const clearForm = () => {
//         setForm({
//             nombre: "",
//             apellido: "",
//             telefono: "",
//             email: "",
//             cantidad: "",
//         });
//     };

//     const postGuestUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";

//     const submitHandler = (event) => {
//         event.preventDefault();
//         if (form.nombre && form.apellido && form.email && form.telefono) {
//             const response = axios.post(postGuestUrl, form)
//                 .then(res => alert("confirmado"))
//                 .catch(err => alert(err))
//             clearForm();
//         } else {
//             setErrors({ ...errors, sbmt: "datos incompletos" });
//             setTimeout(() => {
//                 setErrors({ ...errors, sbmt: "" });
//             }, 2000)
//         }
//     };



//     return (
//         <>
//             <div className="fixed inset-0 z-50 flex items-center justify-center">
//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
//             <div className="relative border-4 border-musgo rounded-xl w-11/12 max-w-2xl bg-white p-4 z-10">
//             <div className="flex justify-end">
//                 <button onClick={closeForm} className="bg-musgo text-white px-3 rounded-lg">X</button>
//             </div>
            
//                 <form onSubmit={submitHandler}>
//                     <div>
//                         <label>Nombre</label>
//                         <input type="text" value={form.nombre} onChange={changeHandler} name="nombre" />
//                         {errors.nombre && <span>{errors.nombre}</span>}
//                     </div>

//                     <div>
//                         <label>Apellido</label>
//                         <input type="text" value={form.apellido} onChange={changeHandler} name="apellido" />
//                         {errors.apellido && <span>{errors.apellido}</span>}
//                     </div>

//                     <div>
//                         <label>Telefono</label>
//                         <input type="text" value={form.telefono} onChange={changeHandler} name="telefono" />
//                         {errors.telefono && <span>{errors.telefono}</span>}
//                     </div>

//                     <div>
//                         <label>Email</label>
//                         <input type="text" value={form.email} onChange={changeHandler} name="email" />
//                         {errors.email && <span>{errors.email}</span>}
//                     </div>

//                     <div>
//                         <label>Cantidad</label>
//                         <select value={form.cantidad} onChange={changeHandler} name="cantidad">
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                         </select>
//                     </div>

//                     <button type="submit">Confirmar asistencia</button>
//                     {errors.sbmt && <span>{errors.sbmt}</span>}
//                 </form>

//                 <SaveTheDate />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default AttConfFormToDB;