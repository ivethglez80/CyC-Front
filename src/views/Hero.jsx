import Config from "../eventData/config"
import hero1 from "./../img/img-hero (1).jpg"
import hero2 from "./../img/img-hero (2).jpg"
import hero3 from "./../img/img-hero (3).jpg"
import amorbg from "./../img/amorbg.png"

const Hero = () => {
    return (
        <>
            <div className=" md:flex md:flex-row w-screen">

                <div className="md:w-2/5 flex flex-col justify-center w-screen">
                    <h1 className="font-seasons mx-auto md:text-6xl text-4xl mt-6">Nuestra boda</h1>
                    <div className="flex flex-row mx-auto">
                        <div className="flex items-baseline">
                            <h1 className="font-kunstler text-4xl md:text-6xl ">{Config.Inovia}</h1>
                            <h1 className="font-julius text-2xl md:text-4xl">{Config.Enovia}</h1>
                        </div>

                        <h1 className="font-seasons pl-3 pt-2 text-xl md:text-4xl md:pl-5"> y </h1>

                        <div className="flex items-baseline">
                            <h1 className="font-kunstler text-4xl md:text-6xl">{Config.Inovio}</h1>
                            <h1 className="font-julius text-2xl md:text-4xl">{Config.Enovio}</h1>
                        </div>

                    </div>
                    <p className="font-julius md:mx-16 text-center md:pt-10 py-2 text-xs md:text-base">Probad y ved que el Señor<br />
                        es bueno. ¡Cuán bienaventurado <br /> es el hombre que en Él se refugia!<br />
                        salmos 34:8
                    </p>
                </div>



                <div className="md:w-3/5 md:flex md:flex-row md:justify-center md:mr-10 
                                "
                >

                    <div className="md:w-2/3 md:flex grid grid-cols-2 grid-rows-7">
                        <img src={amorbg} alt="" className="z-[-10] absolute w-screen md:hidden" />
                        <div className="pt-3 col-start-1 col-span-1 row-start-1 row-span-4 md:h-screen md:flex md:items-center md:justify-center">
                            <div className="w-5/6 mx-auto md:w-11/12 overflow-hidden">
                                <img src={hero3} alt="" className="md:h-screen object-cover md:py-5 rounded-full z-[10]" />
                            </div>
                        </div>


                        <div className="col-span-1 col-start-2 row-start-3 row-span-4 md:h-screen md:flex md:items-center md:justify-center">
                            <div className="w-5/6 mx-auto h-full  md:w-11/12 overflow-hidden ">
                                <img src={hero1} alt="" className="md:h-screen object-cover md:py-5 rounded-full h-full z-[10]" />
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/3 md:h-screen md:flex md:items-center md:justify-center hidden">
                        <div className="md:w-11/12 h-10/12 overflow-hidden ">
                            <img src={hero2} alt="" className="md:h-screen object-cover md:py-5 rounded-full" />
                        </div>
                    </div>


                </div>
                <div className="md:hidden border-b-2 border-zinc-300 w-5/6 mx-auto mb-10"></div>
            </div>
        </>
    )
};

export default Hero;