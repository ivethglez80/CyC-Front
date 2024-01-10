const SaveTheDate = () => {
    const text = "Boda Cami y Charlie";
    const dates = "20240330T113000Z/20240330T200000Z";
    const details = "detalles";
    const location = "https://shorturl.at/zY179";
    // const eventLink = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nombre+del+Evento&dates=20240101T120000Z/20240101T130000Z&details=Descripción+del+Evento&location=Ubicación";
    const eventLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;



    return (
        <>
            <div>
                <a href={eventLink} target="_blank" rel="noopener noreferrer" className="flex justify-center ">
                    <button className="bg-musgo hover:bg-musgo2 rounded-full py-2 w-4/6 md:w-2/6 font-julius text-white">
                        Agendar evento
                    </button>

                </a>
            </div>
        </>
    )
};

export default SaveTheDate;