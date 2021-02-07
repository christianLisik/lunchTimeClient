import {toast } from 'react-toastify';


export const SUCESS_ADDED_PRODUCT = message =>{
    toast.success('✓ ' + message,initToasts);
}

export const SUCESS_ADDED_FAVOURITE = message=>{
    toast.success('✓ ' + message,initToasts);
}

const initToasts={
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    
}