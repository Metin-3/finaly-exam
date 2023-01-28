import React from 'react'
import Book from '../components/book/Book'
import Cards from '../components/home/cards/Cards'
import Carousel from '../components/home/header/Carousel'
import Pato from '../components/home/pato/Pato'
import Welcome from '../components/home/welcom/Welcome'

const Home = () => {
    return (
        <div>
            <Carousel />
            <Welcome />
            <Pato />
            <Cards />
            <Book />
        </div>
    )
}

export default Home