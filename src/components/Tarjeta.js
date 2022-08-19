import React from 'react'
import { Tarjetas } from '../styles/styles'

const Tarjeta = ({ imagen, titulo, trabajo, parrafo }) => {
    return (
        <>
            <Tarjetas>
                <img src={imagen}/>
                <h4>{titulo}</h4>
                <span>{trabajo}</span>
                <p>{parrafo}</p>
            </Tarjetas>
        </>
    )
}

export default Tarjeta