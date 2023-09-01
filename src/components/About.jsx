import {useLocation} from 'react-router-dom';
import {AboutInfo, AboutGrid,AboutParrafo,AboutTitulo} from '../layout/layout'
const About = () => {

    const location = useLocation();
   
    return (
        <>
        <AboutTitulo>Hola soy un desarollador </AboutTitulo>
        <AboutInfo>
           <AboutGrid>
                <div>
                    <AboutParrafo>Estoy aprendiendo día a día, todo lo relacionado con la programacion, tanto web, como móvil e incluso en un futuro el desarollo de videojuegos con unity y c#.
                        Pero por ahora estoy mas centrado en el desarollo web y movil ya que son mis pasatiempos favoritos y en un futuro espero que sea mi trabajo.
                    </AboutParrafo>
                </div>
                <div>
                    <img src="image/byron.jpg" alt="image-autor"  style={{width: '300px', margin : '0 auto'}}/>
                </div>
           </AboutGrid>
        </AboutInfo>
        </>

    )
};


export default About