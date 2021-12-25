import * as types from "../Actions/Types/product";

// INITIAL LOADING STATE
const initialState = {
    loading: false,
    products: [],
}

// Products REDUCER
export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_ALL_PRODUCTS: {
            return {
                loading: false,
                products: state.products
            };
        }
        case types.ADD_PRODUCT: {
            return {
                ...state,
                loading: false,
                products: [{ ...payload }, ...state.products]
            }
        }
        default:
            return state;
    }
};