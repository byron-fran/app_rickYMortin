import { ADD_FAV, REMOVE_FAV, FILTER_GENDER, FILTER_ORDER, RESET, DETAIL} from "./types";

export const addFav = personaje => {
    return {
        type: ADD_FAV,
        payload : personaje
    }
}
export const removeFav = id => {
    return {
        type: REMOVE_FAV,
        payload : id
    }
}

export const filterGender = gender => {
   // console.log(personajes)
    return {
        type : FILTER_GENDER,
        payload : gender
    }
}
export const filterOrder = order => {
     return {
         type : FILTER_ORDER,
         payload : order
     }
 }

 export const reset= () => {
    return {
        type : RESET,
       
    }
}

export const detailPersonaje = id => {
    try{
        return async dispatch => {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            const data = await res.json()
            dispatch({type : DETAIL, payload : data})

        }
    }
    catch(error){
        console.log(error)
    }
}