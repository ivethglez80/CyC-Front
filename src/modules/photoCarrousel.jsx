import hug from "./../img/img-body (3).jpg"
import hands from "./../img/img-body (1).jpg"
import car from "./../img/img-body (2).jpg"

const PhotoCarrousel = () =>{
    return(
        <>
        <div className="mt-24">
            <div className="font-juana text-3xl border border-zinc-300 w-44 rounded-[56px] text-center mx-auto
                            md:ml-10 md:text-4xl md:w-48">
                Nosotros
            </div>

            <div className="flex flex-col md:flex-row pt-6 ">
                <img src={hug} alt=""   className="rounded-[56px] mx-auto my-4 w-3/5 h-3/5 md:w-1/5"/>
                <img src={hands} alt="" className="rounded-[56px] mx-auto my-4 w-3/5 h-3/5 md:w-1/5"/>
                <img src={car} alt=""   className="rounded-[56px] mx-auto my-4 w-3/5 h-3/5 md:w-1/5"/>
            </div>
        </div>
        </>
    )
};

export default PhotoCarrousel;