import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { detailPersonaje } from "../redux/action";
import {DetallePersonaje, InfoPersonaje,SombraImagen} from '../layout/layout'

const Detail = () => {
    const {id} = useParams();
    const personaje = useSelector(state => state.personajeDatail)

    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(detailPersonaje(id))
    }, []) 

    return (
        <DetallePersonaje>
            <div>
                <SombraImagen src={personaje.image} alt={personaje.image} />
            </div>
            <InfoPersonaje InfoPersonaje>
                <h1>{personaje.name }</h1>
                <p>{personaje.gender}</p>
                <p>{personaje.status}</p>
                <p>{personaje.species}</p>
                <p>{personaje.origin?.name}</p>
            </InfoPersonaje>
        </DetallePersonaje>
    )
};

export default Detail;