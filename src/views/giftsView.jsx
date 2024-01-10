import GiftCard from "../cards/giftsView/giftCard";
import giftsData from "../jsonsData/giftsData.json";




const GiftsView = () => {
    return (
        <>
            {giftsData.map(({ artImg, artName, artDescription, artLink, artStore }) => {
                return (
                    <GiftCard
                        artImg={artImg}
                        artName={artName}
                        artDescription={artDescription}
                        artLink={artLink}
                        artStore={artStore}
                    />
                )
            })}  
        
        </>
    )
}

export default GiftsView;