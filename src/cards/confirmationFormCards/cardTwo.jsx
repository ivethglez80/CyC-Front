import { useState } from "react";
import foucsbg from "../../img/foucusbg.png"
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import foucs from "../../img/foucussm.png"
import amor from "../../img/amorsm.png"


const CardTwo = ({ form, onChangeHandler, onSubmit, onNext, onPrev, errors }) => {

    const [quantity, setQuantity] = useState(0);

    const decreaseQty = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
            onChangeHandler({ target: { name: "cantidad", value: quantity - 1 } });
        }
    };
    const increaseQty = () => {
        if (quantity < 5) {
            setQuantity(quantity + 1);
            onChangeHandler({ target: { name: "cantidad", value: quantity + 1 } })
        }
    }



    return (
        <>
            <div className="relative overflow-hidden">
                <img src={foucs} alt="" className="hidden md:block md:absolute md:right-0 md:z-[50] md:translate-x-24 md:-translate-y-16" />
                <div className="bg-white rounded-b-xl pt-6 pb-2 px-8 w-5/6 mx-auto relative overflow-hidden md:pl-0">
                    <img src={foucsbg} alt="" className="-translate-y-20 absolute scale-150 opacity-50 block md:hidden" />
                    <h2 className="font-seasons text-musgo text-center text-base mx-auto pt-2 md:left-0 md:text-start md:text-2xl">Ayudanos con unos datos</h2>
                    <p className="font-julius text-xs text-center mx-auto md:left-0 md:text-start md:text-base">Y es solo un par de segundos mas</p>
                </div>
                <div className="flex flex-col md:flex-row w-2/3 items-center mx-auto md:mx-0">
                    <p className="font-julius text-xs w-5/6 text-center mt-4 mb-10 mx-auto md:w-2/3 md:pl-10 md:text-start md:pr-2">cantidad de personas que confirmas, En caso de haber registrado una familia, ingresá todos los integrantes</p>
                    <div className="flex flex-row justify-center pb-10 z-[70] md:pt-3">
                        <FaMinusCircle onClick={decreaseQty} className="cursor-pointer text-musgo hover:text-musgo2 text-4xl mr-4" />
                        <span className="mx-2 font-julius text-3xl">{quantity}</span>
                        <FaCirclePlus onClick={increaseQty} className="cursor-pointer text-musgo hover:text-musgo2 text-4xl ml-4" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <p className="font-julius text-xs w-5/6 text-center text-white">SI queres registrar a toda tu fAMILIA SIMPLEMENTE ingresá “familia” y el apellido</p>
                </div>
                {quantity === 0 ?
                    <div className="flex justify-center md:justify-end md:pr-10">
                        <button onClick={onSubmit} className="font-julius text-sm border border-white text-white rounded-3xl py-2 w-5/6 md:w-1/3 ">Finalizar y enviar</button>
                    </div>
                    :
                    <div className="flex justify-center md:justify-end md:pr-10">
                        <button onClick={onSubmit} className="font-julius text-sm border rounded-3xl py-2 w-5/6 md:w-1/3 bg-white hover:bg-grisi">{errors.sbmt ? errors.sbmt : "finalizar y enviar" }</button>
                        
                    </div>
                }
                <div className="flex justify-center my-2 md:justify-start md:pl-10">
                    <button onClick={onPrev} className="font-juana text-sm underline text-gray-500 hover:text-black"> volver atras</button>
                </div>
                <img src={amor} alt="" className="hidden md:block md:absolute md:left-0 md:-translate-y-16 md:z-[-50]" />

            </div>


            {/* <div className="py-12 relative overflow-hidden">
            <img src={foucsbg} alt="" className="-translate-y-60 absolute opacity-50 z-[-50]" />
                <h2 className="font-seasons text-musgo text-center text-xl mx-auto pt-2">Ayudanos con un dato mas</h2>
                
                <p className="font-julius text-xs w-5/6 text-center mt-4 mb-10 mx-auto">cantidad de personas que confirmas, En caso de haber registrado una familia, ingresá todos los integrantes</p>

                <div className="flex flex-row justify-center pb-10 z-[70]">
                <FaMinusCircle onClick={decreaseQty} className="cursor-pointer text-musgo text-4xl mr-4" />
                <span className="mx-2 font-julius text-3xl">{quantity}</span>
                <FaCirclePlus onClick={increaseQty} className="cursor-pointer text-musgo text-4xl ml-4" />
                </div>
                {quantity===0 ?
                <div className="flex justify-center">
                    <button onClick={onSubmit} className="font-julius text-sm border border-white text-white rounded-3xl py-2 w-5/6">Finalizar y enviar</button>
                </div>
                :
                <div className="flex justify-center">
                    <button onClick={onSubmit} className="font-julius text-sm border rounded-3xl py-2 w-5/6">Finalizar y enviar</button>
                </div>
                }
                <div className="flex justify-center mt-2">
                    <button onClick={onPrev} className="font-juana text-sm underline text-gray-500">volver atras</button>
                </div>
            </div> */}
        </>
    )
};

export default CardTwo;