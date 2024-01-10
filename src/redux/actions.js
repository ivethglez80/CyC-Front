import axios from "axios";

export const GET_GUESTS = "GET_GUESTS"
export const PUT_ASISTE = "PUT_ASISTE"

const guestDBUrl = import.meta.env.VITE_GUESTS_LIST || "http://localhost:3001/guestsDB";

export const getGuests = () => {
    return async function (dispatch) {
        try {
            const apiData = await axios.get("http://localhost:3001/guestsDB");
            const guests = apiData.data;
            console.log(guests);
            dispatch({ type: GET_GUESTS, payload: guests });
        } catch (error) {
            console.error(error);
        }
    };
};

export const putAsiste = (id, asiste) => {
    return async function (dispatch) {
        try {
            const updtAsste = {id:id, asiste:!asiste}
            const response = await axios.put(guestDBUrl, updtAsste)
            if (response.status === 200){
                dispatch({type: PUT_ASISTE, payload: response.data});
            }else{
                console.error("error: ", response);
            }
        } catch (error) {
            console.error("error: ", error);
        }
    }
}
