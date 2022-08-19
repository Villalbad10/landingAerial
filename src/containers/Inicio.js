import React from 'react'
import ButtonGreen from '../components/ButtonGreen'
import ButtonWhite from '../components/ButtonWhite'
import Tarjeta from '../components/Tarjeta'
import elipce1 from '../assets/img/Ellipse 1.png'
import elipce2 from '../assets/img/Ellipse 2.png'
import elipce3 from '../assets/img/Ellipse 3.png'
import elipce4 from '../assets/img/Ellipse 4.png'
import elipce5 from '../assets/img/Ellipse 5.png'
import elipce6 from '../assets/img/Ellipse 6.png'
import location from '../assets/img/location.png'
import job from '../assets/img/job.png'
import { Banner, Buscador, ContainerTarjetas, Descripcion, Es, Fondo, TaerjetasCan } from '../styles/styles'
import Company from '../components/Company'
import Candidatos from '../components/Candidatos'

function Inicio() {
    return (
        <>
            <Banner>
                <Descripcion>
                    <h1>We support your challenge in new areas.</h1>
                    <p>Our highly qualified headhunters, who have passed a rigorous screening process, will introduce you to your new career opportunity.</p>
                    <ButtonGreen text='Try it Free' />
                    <ButtonWhite text='Explore' />
                </Descripcion>

                <ContainerTarjetas>
                    <Es>
                        <Tarjeta imagen={elipce1} titulo={'Felicity Belle Amis'} trabajo='Work Joe' parrafo={'Leave it to us to change jobs for designers!'} />
                        <Tarjeta imagen={elipce2} titulo={'ThelmaNicks'} trabajo='CareerTweak' parrafo={'We have a maketer position for you.'} />
                        <Tarjeta imagen={elipce3} titulo={'Arman Weight'} trabajo='rjob' parrafo={'I specialize in helping engineers change jobs.'} />
                        <Tarjeta imagen={elipce4} titulo={'Arman Weight'} trabajo='HEIGHREACH' parrafo={'I can help you with the medicical indultry.'} />
                        <Tarjeta imagen={elipce5} titulo={'Earl Dunst'} trabajo='housy' parrafo={'We have a number of CTO positions available.'} />
                        <Tarjeta imagen={elipce6} titulo={'Lodovic'} trabajo='SHIF GUYS' parrafo={'We specialize in contruntion related jobs.'} />
                    </Es>
                </ContainerTarjetas>
            </Banner>

            <Fondo>
                <Company />

                <Buscador>
                    <h2>Search for your area of interest</h2>
                    <p>Please enter your desired industry, job title, and skills</p>
                    <input type="text" placeholder='      engineer, Internet and Web Industry' />
                    <button>Search</button>
                </Buscador>
                
                <TaerjetasCan>
                    <Candidatos title='Leader of iOS engineers for mobility services' imgLocation={location} location='California' imgJob={job} job='Enginer' />
                    <Candidatos title='Leader of iOS engineers for mobility services' imgLocation={location} location='California' imgJob={job} job='Enginer' />
                    <Candidatos title='Leader of iOS engineers for mobility services' imgLocation={location} location='California' imgJob={job} job='Enginer' />
                    <Candidatos title='Leader of iOS engineers for mobility services' imgLocation={location} location='California' imgJob={job} job='Enginer' />
                </TaerjetasCan>

            </Fondo>

        </>
    )
}

export default Inicio