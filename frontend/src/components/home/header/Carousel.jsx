import React from 'react'
import '../header/header.css'
const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" className="d-block w-100" alt="..." />
                        <div className='carousel-item-content'>
                            <h3>WELCOME TO</h3>
                            <h1>POTAO PLACE</h1>
                            <button className='btn btn-light'>Luuk menu</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" className="d-block w-100" alt="..." />
                        <div className='carousel-item-content'>
                            <h3>WELCOME TO</h3>
                            <h1>POTAO PLACE</h1>
                            <button className='btn btn-light'>Luuk menu</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" className="d-block w-100" alt="..." />
                        <div className='carousel-item-content'>
                            <h3>WELCOME TO</h3>
                            <h1>POTAO PLACE</h1>
                            <button className='btn btn-light'>Luuk menu</button>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel