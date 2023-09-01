import Card from "./Card"
import { useDispatch, useSelector} from "react-redux"
import { removeFav, filterGender, filterOrder, reset} from "../redux/action"
import {Contenedor,SideBar,Select,BotonTodos} from '../layout/layout'

 const Favorites = ({onClose}) => {

  const dispatch = useDispatch()

  const myFavorites  = useSelector(state => state.myFavorites)

  const closeFavorite = id =>{
    onClose(id)
    dispatch( removeFav(id))
  }

  const handleChangeSelect = e => {
    e.preventDefault()
    dispatch(filterGender(e.target.value))
  }

  const handleOrder = e => {
    e.preventDefault()
    dispatch(filterOrder(e.target.value))
  }

  return (
    <div>
      
        <SideBar>
          <Select name="filter" defaultValue={'DEFAULT VALUE'} onChange={handleChangeSelect}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="unknown">Unknown</option>
            <option value="genderless">Genderless</option>
          </Select>
          <Select defaultValue={'DEFAULT VALUE'} onChange={handleOrder}>
            <option value="Ascenedente">Ascenedente</option>
             <option value="Descenetene">Descendente</option>
          </Select>
          <BotonTodos onClick={() => { dispatch ( reset()) }}>Todos</BotonTodos>
        </SideBar>
     
        <Contenedor>
        {myFavorites.map( personaje => ( <Card personaje={personaje} key={personaje.id} onClose={() => closeFavorite(personaje.id)} />)) }
        </Contenedor>
       
   
    </div>
  )
}
export default Favorites