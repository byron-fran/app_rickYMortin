import styled from "styled-components";

const Label = styled.label`
   display: block;

`;
const InputTexto = styled.input`
   width: 100%;
`;
const Imagen = styled.image`
   display: block;
   width: 200px;
   height : 400px;
`;
const PantallaFlex = styled.div`
   display: flex;
   justify-content: center;
   align-items : center;
   height: 80vh;
`;
const DivFlex = styled.div`
   display: flex;
   align-items :center;
   justify-content: center;
   flex-direction: column;
   gap: 2rem;
   width: 100%;
   @media(min-width: 768px){
      width: 70%;
      margin: 0 auto;
      flex-direction: row;
   }
`;

const Formulario = styled.form`
   padding: 3rem;
   background: #DFE8F3;
   border: 1px solid #e2e2e2;
   box-shadow :-5px -3px 19px -8px;
 
`;
const Targeta = styled.div`
   position: relative;
   margin: 1rem auto;
   animation: personaje 3s ease;
   @keyframes personaje{
      0%{
         opacity: 0;

      }
      100%{
         opacity: 1;
      }
   }
   @media(min-width: 768px){
       width : 300px;
   }
   cursor: pointer;

  
`;
const BotonSesion = styled.button`
   margin-top : 1rem;
   border: none;
   width : 100%;
   background: #0866df;
   padding: 0.3rem 1rem;
   color : white;
   &:hover{
      background : #0877fe;
      cursor: pointer;
   }
`;
const ParrafoError = styled.p`
   text-align: center;
   color: red;

`;

const Sombra = styled.div`

   width: 90%;
   height: 300px;
   background: rgba(0, 0, 0, 0.2 );
   border-radius: 10px;



`;
const SombraImagen = styled.img`

   height: 300px;
   border-radius: 10px;
 

   
  
`;
const TextoPersonaje = styled.h2`
   color : #fff;
   font-size: 18px;
   font-weight: bold;
`;
const Boton = styled.button`
   background :#0586D5;
   border-radius: 10px;
   display: block;
   width: 90%;
   margin: 0.5rem auto 0 auto;
   padding-block: 0.5rem;
   border: none;
   color : #fff;
   text-transform: uppercase;
   font-weight: bold;
   &:hover{
      background #071187;
   }
   @media(min-width:768px){
      width: 100%;
   }
`;
const BotonDelete = styled.button`
   cursor : pointer;
   background :#C62903;
   border-radius: 10px;
   display: block;
   width: 90%;
   margin: 0.5rem auto 0 auto;
   padding-block: 0.5rem;
   border: none;
   color : #fff;
   text-transform: uppercase;
   font-weight: bold;
   &:hover{
      background:#881B00;
   }
   @media(min-width:768px){
      width: 100%;
   }
`;
const Contenedor = styled.div`
   display: grid;
   align-items: center;
   margin: 0 auto;
   @media (min-width: 768px){
      grid-template-columns: repeat(2, 1fr);
     

   }
   @media(min-width: 990px){
      grid-template-columns: repeat(3, 1fr);
   
   }
   @media(min-width: 1200px){
      grid-template-columns: repeat(3, 1fr);
      width: 80%;
   
   }

`;
const BotonLike =  styled.button`
   margin: 0 auto;
   display: flex;
   
`;
const Barra = styled.div`
   display: flex;
   margin-block: 1rem;
   column-gap: 1rem;
   margin: 2rem  auto;
   @media(min-width: 430px){
      width: 70%;
    
   }
   @media(min-width: 768px){
      width: 60%;

   }
`;
const InputPersonaje = styled.input`
   padding: 0.5rem;
   border-radius: 10px;
   border: none;
   background: #E2E2E2;
   width: 50%;
   flex: 3;
  
`;

const BotonAdd = styled.button`
   padding: 0.5rem;
   border-radius: 10px;
   border: none;
   background : #1ED1A3;
   color : #fff;
   text-transform :uppercase;
   font-weight: bold;
   margin: 0 auto;
   flex: 1;
   &:hover{
      background : #0AAB81;
      cursor: pointer;
   }
`;

const Nagevacion = styled.div`
   display: flex;
   justify-content: space-around;
   flex-direction: column;
   align-items: center;
   @media(min-width: 768px){
      width: 60%;
      margin: 1rem auto;
      flex-direction: row;
      justify-content: space-around;

   }

`;
const BotonNavegacion = styled.button `
   width: 100px;
   border: none;
   border-radius: 7px;
   border: 1px solid #12EAA2;
   text-transform : uppercase;
   margin-bottom: 1rem;
   text-align: center;
   font-size: 0.8rem;
   &:hover{
      background: #1AEAA5;
      color : #fff;
      cursor: pointer;
   }
   @media(min-width: 768px){
      
      flex-direction: row;
      padding : 0.5rem 1rem;
   }

`;
const  BotonLogout = styled.button`
      width: 100px;
   border: none;
   border-radius: 7px;
   border: 1px solid red;
   text-transform : uppercase;
   margin-bottom: 1rem;
   text-align: center;
   font-size: 0.8rem;
   &:hover{
      background: red;
      color : #fff;
      cursor: pointer;
   }
   @media(min-width: 768px){
      
      flex-direction: row;
      padding : 0.5rem 1rem;
   }
`;
const SideBar = styled.div`
   display:flex;
   justify-content: center;
   column-gap: 0.5rem;
   margin-top : 1rem;
   @media(min-width: 768px){

   

   }
`;
const Select = styled.select`
   border: 1px solid #12EAA2;
   border-radius: 4px;
   &:hover{
   
      cursor: pointer;
   }
`;
const BotonTodos = styled.button`
   border: 1px solid #2775D9;
      border-radius: 4px;
   &:hover{
      background: #2775D9;
      color : #fff;
      cursor: pointer;
   }
`;
const DetallePersonaje = styled.div `
   display:flex;
   align-items : center;
   justify-content: center;
   gap: 2rem;
   padding : 2rem;
   border: 1px solid #e2e2e2;
   
   border-radius: 7px;
   background :  #E7EDF5;
   flex-direction: column;
   @media(min-width: 768px){
      box-shadow :4px 7px 19px -8px;
      flex-direction: row;
      width: 50%;
      margin : 1rem auto;
   }
`;
const InfoPersonaje = styled.div`
  
`;
const AboutInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content:center;
   width: 60%;
   margin:0 auto;

`;
const AboutGrid = styled.div`
   display: grid;
   align-items: center;
   border: 1px solid #e2e2e2;
   padding: 1rem;
   box-shadow: 4px 7px 19px -8px;
   column-gap: 2rem;
   @media(min-width: 768px){
      grid-template-columns : repeat(2, 1fr);
      animation: card 3s ease;
      @keyframes card{
         0%{
            opacity: 0;

         }
         100%{
            opacity 1;
         }
      }
   }

`;
const AboutParrafo = styled.p`
   line-height: 1.3rem;
   background: linear-gradient(to right, #0b31f2 0%,  #01ff30 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
   @media(min-width: 990px){
       line-height: 1.8rem;
   }
`;
const AboutTitulo = styled.h1`
   background: linear-gradient(to right, #0b31f2 0%,  #01ff30 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-align: center;
 
  @media(min-width: 768px){
    animation: parrafo 3s ease;

      @keyframes parrafo {
      0%{
         margin-right:30rem;

      }
      100%{
         margin-right: 0;
   }
  }
  @media(min-width: 1100px){
   animation: parrafo 3s ease;

     @keyframes parrafo {
     0%{
        margin-right:50rem;

     }
     100%{
        margin-right: 0;
  }
 }

  }
`;
export {
   Targeta,
   Sombra,
   SombraImagen,
   Boton,
   BotonAdd,
   Contenedor,
   InputPersonaje,
   Barra,
   TextoPersonaje,
   BotonDelete,
   Nagevacion,
   BotonNavegacion,
   SideBar,
   Select,
   BotonTodos,
   DetallePersonaje,
    InfoPersonaje,
    BotonLogout,
    Label,
    InputTexto,
   PantallaFlex,
   Formulario,
    Imagen ,
    DivFlex,
    BotonSesion,
    ParrafoError,
    AboutInfo,
   AboutGrid,
   AboutParrafo,
   AboutTitulo,
   BotonLike


};