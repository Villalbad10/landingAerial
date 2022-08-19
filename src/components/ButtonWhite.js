import React from 'react'
import { BotonWhite } from '../styles/styles'

const ButtonWhite = ({ text = "deafaul" }) => {
    return (
        <>
            <BotonWhite>{text}</BotonWhite>
        </>
    )
}

export default ButtonWhite