import Config from "../eventData/config";
import heart from "./../icons/heart_6597763.png"

const PartyPlace = () => {
    const location = import.meta.env.VITE_EVENT_PLACE;

    return (
        <>
            <div className="font-julius pt-12 md:pt-16">

                <div className="flex flex-col md:flex-row md:pb-6 justify-center items-center">
                    <div>
                        <img src={heart} alt="" className="h-12 md:h-16 mb-4 md:mb-0" />
                    </div>
                    <div className="pb-6">
                        <h2 className="pb-4 text-center">*{Config.wPlace}*</h2>
                        <p className="text-center">{Config.wDir1}</p>
                        <p className="text-center">{Config.wDir2}</p>
                    </div>
                </div>

                <a href={location} target="_blank" className="flex justify-center">
                    <button className="bg-musgo hover:bg-musgo2 rounded-full py-2 w-4/6 md:w-2/6 font-julius text-white">
                        ver ubicacion
                    </button>
                </a>

            </div>
        </>
    )
};

export default PartyPlace