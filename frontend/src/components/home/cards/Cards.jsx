import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../cards/cards.css'
import axios from 'axios'
const Cards = () => {
    const [cards, setCards] = useState([])
    const [value, setValue] = useState("")

    const getData = () => {
        fetch("http://localhost:8080/cards")
            .then(res => res.json())
            .then(data =>
                setCards(data)
            )
    }

    useEffect(() => {
        getData()
    }, [])


    const handleChange = (e) => {
        setValue(e.target.value)
    }


    const getDelete = async (id) => {
        axios.delete(`http://localhost:8080/cards/${id}`)
        getData()
    }
    return (
        < div className='cards' >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <input type="text" placeholder='search' onChange={handleChange} />
                    </div>
                    {
                        cards.filter((card) => {
                            return value.trim().toLowerCase() === " " ? card : card.title.toLowerCase().includes(value.toLowerCase())
                        }).map(({ _id, image, title, content }) => (
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="card">
                                    <img src={image} class="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">{content}</p>
                                        <button class="btn btn-danger" onClick={() => getDelete(_id)}>DELETE</button>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </ div>
    )
}

export default Cards