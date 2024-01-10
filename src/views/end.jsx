import Config from "../eventData/config";

const End = () => {
    return (
        <>
            <div className = "flex flex-col bg-musgo rounded-b-xl mb-10 pt-10 pb-16 text-white">
                <div className="flex flex-row mx-auto text-2xl">
                    <p className="font-juana md:text-5xl">Te esperamos</p> <p className="font-bold md:text-5xl font-thin">!</p>
                </div>

                <div className="flex flex-row mx-auto">
                    <div className="flex items-baseline">
                        <h1 className="font-kunstler text-3xl md:text-8xl ">{Config.Inovia}</h1>
                        <h1 className="font-julius text-xl md:text-6xl">{Config.Enovia}</h1>
                    </div>

                    <h1 className="font-seasons pl-3 pt-2 md:pt-6 text-xl md:text-6xl md:pl-5"> y </h1>

                    <div className="flex items-baseline">
                        <h1 className="font-kunstler text-3xl md:text-8xl">{Config.Inovio}</h1>
                        <h1 className="font-julius text-xl md:text-6xl">{Config.Enovio}</h1>
                    </div>
                </div>
                
            </div>
        </>
    )
};

export default End;