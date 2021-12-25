import * as types from "../Actions/Types/product";


export const getAllProducts = () => ({
    type: types.GET_ALL_PRODUCTS,
})


export const addProduct = (payload) => ({
    type: types.ADD_PRODUCT,
    payload: payload
})