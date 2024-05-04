import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

// const initialState ={
//     cartData:[]
// }


export default function cartItems(state = [], action) {
    debugger
    var productData = []
    switch (action.type) {
        case ADD_TO_CART:
            console.log("Reducer : ", action);
            const existProduct = state.obj1.some(item => item.id === action.data.id);
            //const productData = action.data.productData.map(item => item.id === action.data.id ? { ...item, stock: item.stock - 1 } : item);
           
           
            if (!existProduct) {
                productData = action.data.productData.map(item => item.id === action.data.id ? { ...item, stock: item.stock - 1 } : item);
                return {obj1: [...state.obj1, action.data], obj2 : [...state.obj2,productData]}
                //return [...state, action.data]
            } else {
                productData = state.obj2[0].map(item => item.id === action.data.id ? { ...item, stock: item.stock - 1 } : item);
                return {obj1 : state.obj1.map(item => item.id === action.data.id ? { ...item, qty: item.qty + 1 } : item),obj2:[productData]}
                //return state.map(item => item.id === action.data.id ? { ...item, qty: item.qty + 1 } : item);
            }
        // return [ // Ad dproduct so it will create
        //     ...state, //previous state with data
        //     //action.data
        // ]  
        case REMOVE_TO_CART:
            debugger
            console.log("Reducer : ", action);

            const existsingleProduct = state.obj1.some(item => item.id === action.data.id && item.qty > 1);

            if (action.data.flag && existsingleProduct) {
                productData = action.data.productData.map(item => item.id === action.data.id ? { ...item, stock: item.stock + 1 } : item);
                //return state.obj1.map(item => item.id === action.data.id ? { ...item, qty: item.qty - 1 } : item);
                return {obj1: state.obj1.map(item => item.id === action.data.id ? { ...item, qty: item.qty - 1 }  : item),obj2:[productData]}
            } else {
                productData = state.obj2[0].map(item => item.id === action.data.id ? { ...item, stock: item.stock + 1 } : item);
                //state = state.obj1.filter((items) => items.id !== action.data.id)
                return {obj1: state.obj1.filter((items) => items.id !== action.data.id),obj2:[productData]}
                // return [ // remove product so it will create
                //     ...state, //previous state with data
                // ]
            }

        default:
            return {obj1:state,obj2:productData}
            //return state;
    }
}