import React from 'react'
import { BotonGreen } from '../styles/styles'

function ButtonGreen({ text = "default" }) {
    return (
        <>
            <BotonGreen>{text}</BotonGreen>
        </>
    )
}

export default ButtonGreen