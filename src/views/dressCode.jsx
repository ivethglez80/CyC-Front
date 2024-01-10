import dress from "./../icons/wedding-dress_388708.png"
import jacket from "./../icons/man_2474399.png"

const DressCode = () =>{
    return(
        <>
        <div className="my-20 md:mb-0 md:flex md:flex-row md:bg-grisi md:justify-center md:mt-40">
            <h1 className="font-juana text-musgo bg-grisi text-start text-5xl md:text-9xl md:pr-8">DRESS</h1>
            <div className="flex flex-row justify-center pt-8 md:pt-0">
                <img src={dress} alt="" className="h-20 md:h-32"/>
                <img src={jacket} alt="" className="h-20 md:h-32"/>
            </div>
                <p className="font-julius text-center text-2xl pb-8 md:hidden">ELEGANTE</p>
            <h1 className="font-juana text-musgo bg-grisi text-end text-5xl md:text-9xl md:pl-8 pr-2 md:pr-0">CODE</h1>
        </div>
                <p className="font-julius text-center text-2xl md:text-4xl md:pl-9 hidden md:block md:mt-4">ELEGANTE</p>
        </>
    )
};

export default DressCode;