import focusPhoto from "./../img/foucusbg.png"
import imgFocus from "./../img/img-focus.jpg"

const FocusPhoto = () =>{
    return(
        <>
        <div className="hidden md:block md:pb-32">
            <div className="flex justify-center mt-24">
            <img src={focusPhoto} alt="" className="absolute z-[-10]"/>
            <img src={imgFocus} alt="" className="z-[50] w-4/6 rounded-[56px] pt-5"/>
            </div>
        </div>
        </>
    )
};

export default FocusPhoto;