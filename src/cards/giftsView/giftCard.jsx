

const GiftCard = ({ artImg, artName, artDescription, artLink, artStore }) =>{
    return(
        <>
        <div className="border-2 border-red-100">
            <img src={artImg} alt="artName" className="w-[100px]"/>
            <h3>{artName || ""}</h3>
            <p>{artDescription || ""}</p>
            <a href={artLink || ""} target="_blank">
                {artLink ? "Se puede conseguir aqui"
                         : ""}
            </a>
            <a href={artStore || ""} target="_blank">
                {artStore ? `disponible en ${artStore}`
                         : ""}
            </a>            
        </div>
        </>
    )    
}

export default GiftCard;