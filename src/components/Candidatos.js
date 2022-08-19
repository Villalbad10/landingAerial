import React from 'react'
import { TarjetaCandidato } from '../styles/styles'

const Candidatos = ({ title, imgLocation, location, imgJob, job }) => {
    return (
        <TarjetaCandidato>
            <h4>{title}</h4>
            <p>
                <span> <img src={imgLocation} />  {location}</span>
                <span> <img src={imgJob} />  {job}</span>
            </p>
        </TarjetaCandidato>
    )
}

export default Candidatos
