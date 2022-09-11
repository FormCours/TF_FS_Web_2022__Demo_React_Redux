import { createAction } from "@reduxjs/toolkit"

const { nanoid } = require("nanoid")


// Action Créator (A l'ancienne)
/*
export const addPerson = (data) => {
    return {
        type: 'person/add',
        payload: {
            ...data,
            id: nanoid()
        }
    }
}

export const detailPerson = (personId) => ({
    type: 'person/detail',
    payload: personId
})

export const deletePerson = (personId) => ({
    type: 'person/delete',
    payload: personId
})
*/

// Action créator avec le toolkit (Modern ♥)
export const detailPerson = createAction('person/detail');

export const deletePerson = createAction('person/delete');

export const addPerson = createAction('person/add', (data) => ({
    payload: {
        ...data,
        id: nanoid()
    }
}));