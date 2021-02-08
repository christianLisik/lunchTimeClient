import { toast } from 'react-toastify';


export const SUCESS_ADDED_PRODUCT = (message, amountFood) => {
    toast.success(
        <div>
            <b>In Warenkorb hinzugefügt:</b> <br /><br /> {amountFood}x {message}
        </div>, initToasts);
}

export const SUCESS_ADDED_FAVOURITE = message => {
    toast.success(
        <div>
            <b>Als Favourite hinzugefügt:</b> <br /><br />{message}
        </div>, initToasts);
}



const initToasts = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

}