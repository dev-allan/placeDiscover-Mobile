import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({

    name: 'user',
    initialState: {
        value: []
    },

    reducers: {

        // toggleFavorite: (state, action) => {

        //     const filmIndex = state.value.findIndex(item => item.id === action.payload.id)

        //         if (filmIndex !== -1) {

        //             // Le film est déjà dans les favoris, on le supprime de la liste
        //             state.value = state.value.filter( (item, index) => index !== filmIndex);
        //         }

        //         else {

        //             // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        //             state.value = [ ...state.value, action.payload ]
        //         }

        // },

        addSetting: (state, action) => {

            console.log('addSettings !!')
        }

    },
    
})

// Action creators are generated for each case reducer function
export const { addSetting } = userSlice.actions

export default userSlice.reducer