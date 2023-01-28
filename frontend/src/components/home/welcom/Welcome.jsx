import React from 'react'
import '../welcom/welcome.css'

const Welcome = () => {
    return (
        <>
            <section className='welcome'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="inner-welcom-content">

                                <h3>Italian Restaurant</h3>
                                <h2>WELCOME</h2>
                                <p>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
                                <button className='inner-welcom-content-btn'>OUR STORY </button>


                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='welcom-img'>
                                <img src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome