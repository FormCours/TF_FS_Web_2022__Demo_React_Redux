import { configureStore } from "@reduxjs/toolkit";
import { personReducer } from "./reducers/person-reducer";
import { requestAgeReducer } from "./reducers/request-age-reducer";


const store = configureStore({
    reducer : {
        person: personReducer,
        age: requestAgeReducer
    },
    devTools : process.env.NODE_ENV !== 'production'
})

export default store;