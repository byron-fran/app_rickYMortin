import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {Label, InputTexto, PantallaFlex,Formulario, Imagen , DivFlex,BotonSesion,ParrafoError} from '../layout/layout';
import '../css/styles.css'
const Form = () => {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const navigate = useNavigate();
    const [useData, setUserData] = useState({
        email : '',
        password : ''
    })
    const [errores, setErrores] = useState({
        email : '',
        password : ''
    })
    const [access, setAccess] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!regexEmail.test(useData.email)){
            setErrores({
            ...errores, 
            email : 'El Email no es valido'
            })
        
            return
        }
        if(useData.password.length < 7){
            setErrores({...errores, 
                password : 'El password muy corto '}) 
            return
         }
            else{
            setAccess(true)
            navigate('/home');
            setErrores({})
        }
    }
    useEffect(() => {
        !access && navigate('/')
    },[access])
  return (
    
    <PantallaFlex>
        <DivFlex>
            <div>
                <img className="imagen-rick" src="image/naverick.jpg" alt="imagen rick" style={{
                    width : '300px'
                }}/>
            </div>
            <Formulario onSubmit={handleSubmit}>
 
                <div>
                    {errores && (<ParrafoError>{errores.email}</ParrafoError>)}
                     <Label htmlFor="email" >Correo</Label>

                    <InputTexto type="email" name="email" value={useData.email} onChange={(e)=> setUserData({...useData, email : e.target.value})} />
                </div>
                <div>
                {errores && (<ParrafoError>{errores.password}</ParrafoError>)}
                    <Label htmlFor="password">Contraseña</Label>
                    <InputTexto type="password" name="password" value={useData.password} onChange={(e)=> setUserData({...useData, password : e.target.value})}/>
                </div>
                <BotonSesion type="submit">Iniciar Sesion</BotonSesion>
            </Formulario>
        </DivFlex>


    </PantallaFlex>

  )
}

export default Form