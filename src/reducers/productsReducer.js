import {SET_PRODUCTS} from '../types/product.types';

export const productInitialState = [];

const productsReducer = (state = productInitialState, action)=>{
    switch(action.type){
        case SET_PRODUCTS:
            return[...action.payload];
            default:
                return state;
    }
};

export default productsReducer;