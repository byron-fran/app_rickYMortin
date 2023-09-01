
import { Link , useLocation, NavLink} from 'react-router-dom';
import { Barra, InputPersonaje, BotonAdd, Nagevacion, BotonNavegacion ,BotonLogout} from '../layout/layout';
import '../css/styles.css'



const Nav = ({handleBusqueda,valor ,setValor}) => {
   const location = useLocation();
   return (
      <>
         {location.pathname  !== '/' ? (

            <Barra>
          <InputPersonaje placeholder='Agrega un Personaje' type='text' value={valor} onChange={(e) => setValor(e.target.value)}/>
         <BotonAdd onClick={()=>handleBusqueda(valor)}>Agregar</BotonAdd> 

 
      </Barra>
         ): null}

      {location.pathname  !== '/' &&     
      <Nagevacion>
            <NavLink  to='/home' className={({isActive}) =>  isActive ?'navagacionActiva' : ''}>
              <BotonNavegacion >Home</BotonNavegacion>
            </NavLink>
            <NavLink to='/favorites' className={({isActive}) =>  isActive ?'navagacionActiva' : ''}>
             < BotonNavegacion>Favorites</ BotonNavegacion>
            </NavLink>
            <NavLink to='/about' className={({isActive}) =>  isActive ?'navagacionActiva' : ''}>
             <BotonNavegacion>About</BotonNavegacion>
            </NavLink>
            <NavLink to='/' className={({isActive}) =>  isActive ?'navagacionActiva' : ''}>
             <BotonLogout>Logout</BotonLogout>
            </NavLink>
      </Nagevacion> }
      </>

   );
}
export default Nav;