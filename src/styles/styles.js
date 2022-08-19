import styled from "styled-components";
import imgFondo from '../assets/img/Vector 1.png'
import buscar from '../assets/img/buscar.png'

export const Navbar = styled.nav`
    align-items: center;
    display: flex;
    justify-content: center;
    height: 3.5rem;  
    flex-wrap: wrap;
    @media(min-width: 900px){
        display: flex;
        justify-content: space-between;
        margin: 1.5rem 5%;
    }

    div{
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        li{
        display: list-item;
        list-style-type: none;
        margin-right: 2rem;
    }
    }
`

export const BotonGreen = styled.button`
    background-color: #24B26B;
    border: 1px solid #24B26B;
    border-radius: 0.3rem;
    color: white;
    cursor: pointer;
    padding: .5rem;
    margin-right: 1rem;
`
export const BotonWhite = styled.button`
    background-color: white;
    border: 1px solid grey;
    border-radius: 0.3rem;
    color: black;
    cursor: pointer;
    padding: .5rem;
    margin-right: 1rem;
`

export const Banner = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: 5%;
`

export const Descripcion = styled.div`
    margin-top: 5.5rem;
    margin-right: 1rem;
    h1{
        font-size: 2.6rem;
    }
    p{
        margin: 2rem 0;
    }

    @media (min-width: 900px){
        margin-right: 6rem;
        text-align: justify;
        width: 32%;

        h1{
            font-size: 3rem;
        }

    }
`

export const Tarjetas = styled.div`
    background-color: white;
    border-radius: 0.7rem;
    box-shadow: 0px -8px 35px -4px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
    text-align: center;
    width: 11.5rem;
    margin-right: 1rem;
    margin-top: 1rem;
    padding: 1rem .2rem;

    img{
        margin-top: 2rem;
    }
    h4{
        margin-top: .8rem;
    }
    span{
        color: grey;
    }
    p{
        color: grey;
        font-size: .9rem;
        margin-top: 1.5rem;
        margin-bottom: .5rem;
    }
`

export const ContainerTarjetas = styled.div`

    @media (min-width: 900px){
        background-image: url(${imgFondo});
        background-size: cover;
        background-position-x: 2rem;
        background-position-y: 3rem;
        background-repeat: no-repeat;
        width: 60%;
    }
`

export const Es = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;

    @media(min-width: 900px){
        margin-left: 6rem;
    }
`
export const Fondo = styled.div`
    background-color: #FAFAFA;
`

export const Styledompany = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    padding: 4rem 0;
    justify-content: center;

    img{
        margin-right: 2rem;
    }
`

export const Buscador = styled.div`
    text-align: center;
    margin-bottom: 1.5rem;
    h2{
        font-size:2rem
    }
    p{
        margin-top: .5rem;
        margin-bottom: 1.3rem;
    }

    input{
        border: 1px solid grey;
        border-radius: 0.3rem;
        background-image:url(${buscar}) ;
        background-repeat: no-repeat;
        background-position-y: .3rem;
        margin-right: .5rem;
        height: 2rem;
        width: 22rem;
    }

    button{
        border: 1px solid black;
        border-radius: .3rem;
        background-color: black;
        color: white;
        cursor: pointer;
        padding: .5rem;
    }
`

export const TarjetaCandidato = styled.div`
    background-color: white;
    box-shadow: 0px -8px 35px -4px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1);
    border-radius: 0.5rem;
    text-align: center;
    margin-right: .5rem;
    width: 15rem;
    height: 10rem;
    margin-bottom: 4rem;
    h4{
        margin-top: 1rem;
        font-weight: 600;
    }
    p{
        opacity: .6;
        font-size: .9rem;
        margin-top: 1rem;
    }
`
export const TaerjetasCan = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 5%;
`
