import { ADD_FAV, REMOVE_FAV, FILTER_GENDER, FILTER_ORDER, RESET, DETAIL } from "./types"

const initialState = {
    myFavorites : [],
    allCharacters : [],
    personajeDatail : {}
}

export const reducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_FAV:{
            return{
                ...state,
                myFavorites : [...state.myFavorites, action.payload],
                allCharacters : [...state.myFavorites, action.payload],
            }
        }
        case REMOVE_FAV:{
            const personajeRemove =state.myFavorites.filter(personaje => personaje.id !== action.payload);
            return{
                ...state,
                myFavorites : personajeRemove,
                allCharacters : personajeRemove
            }
        }
        case FILTER_GENDER :
            const personajesFilter = state.allCharacters.filter( personaje => personaje.gender === action.payload);
            return {
                ...state,
                myFavorites : personajesFilter,
               
            }
        case FILTER_ORDER:
            const personajesOrder = state.allCharacters.sort((a,b) => {
                if(a.id > b.id){
                    return 'Ascenedente' === action.payload ? 1 : -1
                }
                if(a.id < b.id){
                    return 'Descendente' === action.payload ? 1 : -1
                }
                return 0;
            });
            return {
                ...state,
                myFavorites : personajesOrder

            }
        case  RESET :
            return {
                ...state,
                myFavorites : [...state.allCharacters]
            }
        case DETAIL:
            return{
                ...state,
                personajeDatail : action.payload
            }    
        default: 
        return {...state}
    }
}