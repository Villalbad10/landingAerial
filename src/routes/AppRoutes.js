import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from '../containers/Inicio'
import NavbarComponent from '../components/NavbarComponent'

function AppRoutes() {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path='/' element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes