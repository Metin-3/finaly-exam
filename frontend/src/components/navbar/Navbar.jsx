import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../media/logo2.png.webp'
import '../navbar/navbar.css'
import icon1 from '../../media/icon1.png'
import icon2 from '../../media/icon2.png'

const Navbar = () => {
    return (
        <>
            <nav className="navbar text-light navbar-expand-lg navbar-light bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light active" aria-current="page" to="/">HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-light" to="menu">MENU</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-light" to="about">ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-light" to="galery">GALERY</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-light" to="blog">BLOG</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link text-light" to="add">ADD</Link>
                            </li>

                        </ul>
                        <div className="d-flex">
                            <img src={icon1} className="mx-2" alt="" />
                            <img src={icon1} className="mx-2" alt="" />
                            <img src={icon1} className="mx-2" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar