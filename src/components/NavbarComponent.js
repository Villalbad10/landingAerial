import React from 'react'
import logo from '../assets/img/logo.png'
import { Navbar } from '../styles/styles'
import ButtonGreen from './ButtonGreen'
import ButtonWhite from './ButtonWhite'

function NavbarComponent() {

    return (
        <>
            <Navbar>
                <img src={logo}></img>
                <div>
                    <li>Job Search</li>
                    <li>About</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <ButtonWhite text='Log in' />
                    <ButtonGreen text='Try it Free' />
                </div>
            </Navbar>
        </>
    )
}

export default NavbarComponent