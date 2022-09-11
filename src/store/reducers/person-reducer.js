
// Reducer à l'ancienne
// - Une fonction avec un switch pour chaque case
// - Dans chacun, on créer un nouvelle objet "state"

import { createReducer } from "@reduxjs/toolkit";
import { addPerson, deletePerson, detailPerson } from "../actions/person-action";

// Reducer avec le toolkit
const initialState = {
    list: [
        {id:'test1', firstname: 'Zaza', lastname: 'Vanderquack'},
        {id:'test2', firstname: 'Della', lastname: 'Duck'},
        {id:'test3', firstname: 'Ludwig', lastname: 'Von Drake'},
        {id:'test4', firstname: 'Riri', lastname: 'Duck'},
    ],
    detail: null
};

export const personReducer = createReducer(initialState, builder => {
    // builder
    //  .addCase(addPerson, (state, action) => {
    //      // Envoi d'une copie du state modifié
    //      return {
    //          ...state, 
    //          list : [...state.list, action.payload]
    //      };
    //  })

    builder
        .addCase(addPerson, (state, action) => {
            // Utilisation de "Immer"
            // https://immerjs.github.io/immer/#how-immer-works
            state.list.push(action.payload);

            // Pour utiliser "immer", il ne faut jamais faire de 'return' !
        })
        .addCase(deletePerson, (state, action) => {
            const targetId = action.payload;
            state.list = state.list.filter(p => p.id !== targetId);

            // ↓ Méthode alternative
            // const index = state.list.findIndex(p => p.id === targetId);
            // state.list.splice(index, 1);
        })
        .addCase(detailPerson, (state, action) => {
            const targetId = action.payload;

            state.detail = state.list.find(p => p.id === targetId);
        });

});