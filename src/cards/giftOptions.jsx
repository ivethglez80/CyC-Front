import GiftData from "../modules/giftData";
import BankData from "../modules/bankData";




const GiftOptionsCard = ({ closeCard }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative border-4 border-musgo rounded-xl w-11/12 max-w-2xl bg-white p-4 z-10">
                <button onClick={closeCard} className="bg-musgo text-white px-3 rounded-lg absolute top-2 right-2">X</button>
                <div className="w-full">
                    {/* Aquí va el contenido de tu tarjeta */}
                    <BankData />
                </div>
            </div>
        </div>
    );
};

export default GiftOptionsCard;