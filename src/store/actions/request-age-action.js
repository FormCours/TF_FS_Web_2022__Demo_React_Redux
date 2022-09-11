import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAge = createAsyncThunk(
    'age/request', 
    async (data) => {

        const result = await axios.get('https://api.agify.io/', {
            params : {
                name: data,
                country_id: 'BE'
            }
        });

        return {
            age: result.data.age,
            name: result.data.name
        };
    }
);

// Action envoyer par l'action créator
// - demarrage : 'age/request/pending'
// - succes    : 'age/request/fulfilled'
// - error     : 'age/request/rejected'