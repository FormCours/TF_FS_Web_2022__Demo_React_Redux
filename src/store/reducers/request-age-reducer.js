import { createReducer } from "@reduxjs/toolkit";
import { fetchAge } from "../actions/request-age-action";

const initialState = {
    isLoading: false,
    data: null,
    error: null
};

export const requestAgeReducer = createReducer(initialState, builder => {

    builder
        .addCase(fetchAge.pending, (state, action) => {
            state.isLoading = true;
            state.data = null;
            state.error = null;
        })
        .addCase(fetchAge.fulfilled, (state, action) => {
            // state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(fetchAge.rejected , (state, action) => {
            // state.isLoading = false;
            state.error = action.error;
            
        })
        .addMatcher(
            (action) => /\/(fulfilled|rejected)$/.test(action.type),
            (state, action) => {
                state.isLoading = false;
            }
        );
});