import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import '../Add/add.css'
const Add = () => {
    const [state, setState] = useState({
        image: "",
        title: "",
        content: ""
    })

    const postData = (e) => {
        e.preventDefault();

        if (!state.image || !state.title || !state.content) return
        axios.post("http://localhost:8080/cards", state)
        setState({
            image: "",
            title: "",
            content: ""
        })
    }

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    return (
        <div className='add'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='text-center'>Add data</h1>
                        <form onSubmit={postData} >
                            <div className='my-3'>
                                <label htmlFor="">Image:   </label>
                                <input name='image' value={state.image} className='px-5 py-2' type="text" onChange={handleChange} />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="">Title :   </label>
                                <input onChange={handleChange} value={state.title} name='title' className='px-5 py-2' type="text" />
                            </div>
                            <div className='my-3'>
                                <label htmlFor="">Content</label>
                                <input name='content' value={state.content} className='px-5 py-2' onChange={handleChange} type="text" />
                            </div>
                            <div>
                                <button className='btn btn-success' >add data</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add