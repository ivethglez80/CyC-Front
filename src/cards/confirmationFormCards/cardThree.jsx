import SaveTheDate from "../../components/saveTheDate";
import Config from "../../eventData/config";
import imgCard3 from "./../../img/card3.png"

const CardThree = ({onClose}) => {
    return (
        <>
            <div className="bg-musgo mt-4 mx-4 rounded-t-full pb-32 relative overflow-hidden md:w-1/2 md:mx-auto">
                <img src={imgCard3} alt="" className="absolute scale-150" />

                <div className="pt-24 md:pt-16 pb-6 md:pb-2 flex justify-center md:px-10">
                    <h3 className="font-juana text-white text-2xl text-center w-5/6">Fuiste confirmado con éxito</h3>
                </div>

                <div className="flex flex-row justify-center text-white">
                    <div className="flex items-baseline">
                        <h1 className="font-kunstler text-4xl md:text-5xl ">{Config.Inovia}</h1>
                        <h1 className="font-julius text-2xl md:text-3xl">{Config.Enovia}</h1>
                    </div>

                    <h1 className="font-seasons pl-3 pt-2 md:pt-2 text-xl md:text-3xl md:pl-5"> y </h1>

                    <div className="flex items-baseline">
                        <h1 className="font-kunstler text-4xl md:text-5xl">{Config.Inovio}</h1>
                        <h1 className="font-julius text-2xl md:text-3xl">{Config.Enovio}</h1>
                    </div>
                </div>

                <div className="absolute bottom-0 w-full flex flex-col justify-center px-auto">
                    <SaveTheDate />
                    <button onClick={onClose} className="font-juana text-sm underline text-gray-400 py-3">Cerrar</button>
                </div>

            </div>
        </>
    )
};

export default CardThree;