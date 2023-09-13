import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

const LoaderSlice = createSlice({
    name: 'LoaderSlice',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            return {
                ...state,
                isLoading: action.payload
            };
        },
    }
});

export const { setIsLoading } = LoaderSlice.actions;
export default LoaderSlice.reducer;