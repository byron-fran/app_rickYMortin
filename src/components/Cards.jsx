import Card from './Card';
import { Contenedor } from '../layout/layout';
import Error from './Error';

export default function Cards({personajes,onClose,errorMensje}) {
   

   return (
      <div>
         {errorMensje ? (
            <Error/>
         ): (
         <Contenedor>
            {personajes && personajes.map(personaje => {
     
                return(
               <Card personaje={personaje} key={personaje.id} onClose={onClose}/>
               
               )})}
         </Contenedor>
         )}

      </div>

   );
}
