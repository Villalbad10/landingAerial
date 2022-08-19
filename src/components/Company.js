import React from 'react'
import company1 from '../assets/img/HAREE.png'
import company2 from '../assets/img/Group.png'
import company3 from '../assets/img/logo_perman.png'
import company4 from '../assets/img/logo_jobona.png'
import company5 from '../assets/img/logo_workctrl.png'
import { Styledompany } from '../styles/styles'

const Company = () => {
    return (

        <Styledompany>
            <img src={company1} />
            <img src={company2} />
            <img src={company3} />
            <img src={company4} />
            <img src={company5} />
        </Styledompany>

    )
}

export default Company