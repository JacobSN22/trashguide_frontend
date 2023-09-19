import React from 'react'
import { Header } from '../partials/header'
import slideshow from '../images/Assets/Slideshow/malerspande.jpg'
import { Sectionstyle } from '../style/home.style'
import artone from '../images/Assets/Layout/art-one.svg'
import arttwo from '../images/Assets/Layout/art-two.svg'
import { Footer } from '../partials/footer'

export const Home = () => {
    return (
        <>
            <Header />
            <Sectionstyle>
                <section>
                    <div className='main'>
                        <img src={slideshow} alt="" />
                        <div className='onmain'>
                            <h3>Find og anmeld genbrugsstationer</h3>
                            <button>Find station</button>
                            <button>Log ind</button>
                        </div>
                    </div>



                </section>

                <article className='artone'>
                    <div>
                        <h2>Din <span>guide til sortering</span> </h2>
                        <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
                        <button>Se affaldsguide</button>
                    </div>

                    <div>
                        <img src={artone} alt="affald" />
                    </div>
                </article>


                <article className='arttwo'>
                    <div>
                        <img src={arttwo} alt="skraldespande" />
                    </div>

                    <div>
                        <h2>bestil <span>din nye affaldsbeholder</span> </h2>
                        <p>when an unknown printer took a galley of type and scramble it to make a type specimen book. It has survived not only</p>
                        <button>Bestil nu</button>
                    </div>

                </article>
            </Sectionstyle>
            <Footer />
        </>
    )
}