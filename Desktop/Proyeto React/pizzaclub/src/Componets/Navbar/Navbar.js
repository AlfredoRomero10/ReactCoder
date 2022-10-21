import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <NavLink className="navbar-brand fs-1 text-light" to='/'>Polo Club</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active fs-4 text-light" aria-current="page" to='/categoria/camisas'>Camisas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4 text-light" to='/categoria/chombas'>Chombas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link fs-4 text-light" to='/categoria/camperas'>Camperas</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-link text-bg-danger" to='/cart'>
                        <li>
                        <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar