import foucsbg from "../../img/foucusbg.png"
import foucs from "../../img/foucussm.png"
import amor from "../../img/amorsm.png"

const CardTwoM = ({ form, onChangeHandler, onNext, onPrev, onClose, errors }) => {
    return (
        <>
        <div className="relative overflow-hidden">
        <img src={foucs} alt="" className="hidden md:block md:absolute md:right-0 md:z-[50] md:translate-x-24 md:-translate-y-16"/>
                <div className="bg-white rounded-b-xl pt-6 pb-2 px-8 w-5/6 mx-auto relative overflow-hidden md:pl-0">
                <img src={foucsbg} alt="" className="-translate-y-20 absolute scale-150 opacity-50 block md:hidden" />
                <h2 className="font-seasons text-musgo text-center text-base mx-auto pt-2 md:left-0 md:text-start md:text-2xl">Ayudanos con unos datos</h2>
                <p className="font-julius text-xs text-center mx-auto md:left-0 md:text-start md:text-base">Y es solo un par de segundos mas</p>
                </div>
                <div className="flex justify-center mt-6 mb-2 md:justify-start md:pl-12">                    
                    <input type="text" value={form.email} onChange={onChangeHandler} name="email" placeholder="correo electronico"
                    className="bg-grisi hover:bg-white hover:shadow-md p-3 font-julius rounded-xl w-5/6 text-xs md:w-1/3"/>                    
                    {errors.email && <div className="absolute mt-10 text-pink-300">{errors.email}</div>}
                </div>
                <div className="flex justify-center">
                    <p className="font-julius text-xs w-5/6 text-center text-white">SI queres registrar a toda tu fAMILIA SIMPLEMENTE ingresá “familia” y el apellido</p>
                </div>
                <div className="flex justify-center mt-10 md:justify-end md:pr-10">
                <button onClick={onNext} className="font-julius text-sm border rounded-3xl py-2 w-5/6 md:w-1/3 bg-white hover:bg-grisi">siguiente</button>
                </div>
                <div className="flex justify-center my-2 md:justify-start md:pl-10">
                <button onClick={onPrev} className="font-juana text-sm underline text-gray-500 hover:text-black"> volver atras</button>
                </div>
                <img src={amor} alt="" className="hidden md:block md:absolute md:left-0 md:-translate-y-16 md:z-[-50]"/> 
                
            </div>
        </>
    )
};

export default CardTwoM;