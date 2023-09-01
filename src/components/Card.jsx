import { useState, useEffect } from 'react';
import {Targeta, SombraImagen, TextoPersonaje, Boton, BotonDelete, BotonLike} from '../layout/layout'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/action';

 function Card({onClose,personaje}) {
      //const dispatch = useDispatch()
      const dispatch = useDispatch();
      const myFavorites = useSelector(state => state.myFavorites);

      const [isFav, setIsFav] = useState(false);

      const handleFavorite = () => {
         if(isFav){
            setIsFav(false)
            dispatch(removeFav(personaje.id))
            
         }
         else{
            setIsFav(true)
            dispatch( addFav(personaje))
           
         }
      }

      const superClose =   () => {
         onClose(personaje.id)
         dispatch(removeFav(personaje.id))
      }
      useEffect(() => {
         myFavorites.forEach(favorito => {
            if(favorito.id === personaje.id){
               setIsFav(true)
            }
         })
      }, [ myFavorites])
      if(!personaje) return null;

   return (
      <Targeta>
         
         <SombraImagen src={personaje.image} />
         {
         isFav ? (
            < BotonLike onClick={handleFavorite}>❤️</ BotonLike>
          ) : (
            < BotonLike onClick={handleFavorite}>🤍</ BotonLike>
         )
         }
         <Link to={`/detail/${personaje.id}`}>
          <Boton >Ver</Boton>
         </Link>
           
         <BotonDelete onClick={ superClose}>Eliminar</BotonDelete>
      </Targeta>
   );
}

export default Card;