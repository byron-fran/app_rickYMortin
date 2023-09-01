import { useState, useEffect } from 'react';
import Detail from './components/Detail';
import Cards from './components/Cards';
import Nav from './components/Nav';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Form from './components/Form';
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites';
import { removeFav } from './redux/action';

function App() {
  const [valor, setValor] = useState('');
  const [errorMensje, setErrorMensaje] = useState(false);
  const [personajes, setPersonajes] = useState([]);
 
  const location = useLocation();
  const handleBusqueda =  (id) => {

    
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        const personajeExiste = personajes.find(personaje => personaje.id === data.id);
        if(!personajeExiste){
           setPersonajes((oldChars) => [...oldChars, data]);
          setErrorMensaje(false)
          return
        }
        alert('El Personaje ya existe')
       
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   }).catch((error =>{
    const errorBusqueda = error.response.status;
    if(errorBusqueda === 404){
        setErrorMensaje(true)
    }
  }));
   setValor(''); 
  }


  const onClose= (id) => {
    const personajesFilter = personajes.filter(personaje => {
      return personaje.id !== id;
    });
    setPersonajes(personajesFilter);
  }

  return (
  <>
      {location.pathname !== '/ '? (
         <Nav valor={valor} setValor={setValor} handleBusqueda={handleBusqueda}/>
      ): null}
   
      <Routes>
        <Route path='home' element={ <Cards personajes={personajes}  onClose={onClose} errorMensje={errorMensje} setErrorMensaje={setErrorMensaje}/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='detail/:id' element={<Detail/>}/>
        <Route path='/' element={<Form/>}/>
        <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
        <Route path='/*' element={<Form/>}/>
     </Routes>
  </>
  );
}

export default App;
