import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({

    name: 'favorite',
    initialState: {
        value: []
    },

    reducers: {

        toggleFavorite: (state, action) => {

            // const filmIndex = state.value.findIndex(item => item.id === action.payload.id)

            //     if (filmIndex !== -1) {

            //         // Le film est déjà dans les favoris, on le supprime de la liste
            //         state.value = state.value.filter( (item, index) => index !== filmIndex);
            //     }

            //     else {

            //         // Le film n'est pas dans les films favoris, on l'ajoute à la liste
            //         state.value = [ ...state.value, action.payload ]
            //     }

            console.log('tooggleFavorite slicer')

        },

    },
    
})

// Action creators are generated for each case reducer function
export const { toggleFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer