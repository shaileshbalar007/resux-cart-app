import {ADD_TO_CART,REMOVE_TO_CART} from '../constants'

export const addToCart=(data)=>{
    console.log("Action : ",data)
    return{
        type:ADD_TO_CART,
        data:data //data contains information about product name,price etc.
    }
}

export const removeToCart=(data)=>{
    return{
        type:REMOVE_TO_CART,
        data:data
    }
}