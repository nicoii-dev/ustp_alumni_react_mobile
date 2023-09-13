import { createSlice } from "@reduxjs/toolkit";
import Toast from 'react-native-simple-toast';

const initialState = {
    products: [],
    total: 0
};

const CartSlice = createSlice({
    name: 'CartSlice',
    initialState,
    reducers: {
        addProduct: (state: any, action) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const inCart = state.products.some((item: any) => item.productId === action.payload.productId);
            if (inCart) {
                // already exists, add quantity only
                return {
                    ...state,
                    products: state.products.map(
                        (product: any) => product.productId === action.payload.productId
                            ? {
                                ...product,
                                quantity: product.quantity + 1,
                            }
                            : product
                    ),
                    total: state.total + action.payload.price * action.payload.quantity
                };
            }
            return {
                ...state,
                products: [...state.products, action.payload],
                total: state.total + action.payload.price * action.payload.quantity
            };
        },

        addQty: (state: any, action) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return {
                ...state,
                products: state.products.map(
                    (product: { productId: number; quantity: number, stock: number }) =>
                        product.productId === action.payload.productId
                            ? {
                                ...product,
                                quantity: product.quantity + 1,
                            }
                            : product
                ),
                total: state.total + action.payload.price
            }
        },

        subQty: (state: any, action) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return {
                ...state,
                products: state.products.map(
                    (product: { productId: number; quantity: number }) =>
                        product.productId === action.payload.productId
                            ? {
                                ...product,
                                quantity: product.quantity - 1,
                            }
                            : product
                ),
                total: state.total - action.payload.price
            };
        },

        removeProduct: (state, action) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return {
                ...state,
                products: state.products.filter(
                    (product: { productId: number }) =>
                        product.productId !== action.payload.productId
                ),
                total: state.total - action.payload.price
            };
        },

        removeAllProduct: (state) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return {
                ...state,
                products: [],
                total: 0,
            };
        },
    }
});

export const { addProduct, addQty, subQty, removeProduct, removeAllProduct } = CartSlice.actions;
export default CartSlice.reducer;