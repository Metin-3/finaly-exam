import React from 'react'
import '../book/book.css'
const Book = () => {
    return (
        <div className='book'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 my-4">
                        <div>
                            <p className='text-danger'>Reservation</p>
                            <h1>BOOK TABLE</h1>
                            <form action="" >
                                <div className='d-flex flex-wrap justify-content-center  justify-content-between'>
                                    <div className=''>
                                        <div className='my-3 text-center'>
                                            <label htmlFor="">Date</label><br />
                                            <input type="text" className='py-2 px-2' />
                                        </div>
                                        <div className='my-3'>
                                            <label htmlFor="">Date</label><br />
                                            <input type="text" className='py-2 px-2' />
                                        </div>
                                        <div className='my-3'>
                                            <label htmlFor="">Date</label><br />
                                            <input type="text" className='py-2 px-2' />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='my-3'>
                                            <label htmlFor="">Date</label><br />
                                            <input type="text" className='py-2 px-2' />
                                        </div>
                                        <div className='my-3'>
                                            <label htmlFor="">Date</label><br />
                                            <input type="text" className='py-2 px-2' />
                                        </div>
                                        <div className='my-3'>
                                            <label htmlFor="">Date</label><br />
                                            <input type="text" className='py-2 px-2' />
                                        </div>
                                    </div>
                                </div>

                                <div className='text-center'>
                                    <button className='btn btn-dark'>book table</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className='d-flex justify-content-center book-image'>
                            <img src="https://preview.colorlib.com/theme/pato/images/master-slides-01.jpg.webp" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Book