import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGuests } from "../../redux/actions";
import Card from "./guestCard";
import { useSelector } from "react-redux";
import ondita from "./../../icons/ondita.svg"
import Config from "./../../eventData/config"


const GuestCardsContainer = () => {
    const dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(getGuests());
    }, [dispatch]);
    
    const guests = useSelector(state => state.guests);
    console.log("en el container", guests);
    
    const confOk = guests.reduce((total, guest) => {
        if (guest.asiste){
            return total + guest.cantidad;
        }
        return total;
    },0);

    return (
        <>
            {/* <pre>{JSON.stringify(guests, null, 2)}</pre> */}
            <div className="bg-gradient-to-b from-[#3F5134] from-10% via-[#3F5134] via-50% to-[#9FC589] h-screen">
                <div>

                    <div className="relative">
                        <div className="md:flex md:justify-end">
                        <img src={ondita} alt="" className=""/>
                        </div>
                        

                        <div className="absolute top-7 left-2 flex flex-row mx-auto text-white md:left-20">
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
                        <div className="absolute top-16 left-5 text-white text-base md:top-28 md:left-32 md:text-2xl">
                            <p>
                                Boda lista
                            </p>
                        </div>
                    </div>


                </div>
                <div>
                <div className="w-5/6 mx-auto">
                    <div className="flex flex-row text-rose-200">
                        <div className="w-1/5 flex justify-center">
                            <p>Cant</p>
                        </div>
                        <div className="w-3/5 pl-2">
                            <p>Nombre</p>
                        </div>
                        <div className="w-1/5 flex justify-center">
                            <p>Asistencia: </p> <p>{confOk}</p>
                        </div>
                    </div>
                    
                    {guests.map(guest => {
                        return <Card
                            key={guest.id}
                            id={guest.id}
                            nombre={guest.nombre}
                            apellido={guest.apellido}
                            telefono={guest.telefono}
                            email={guest.email}
                            cantidad={guest.cantidad}
                            asiste={guest.asiste}
                        ></Card>
                    })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default GuestCardsContainer