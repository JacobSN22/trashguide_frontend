import React from 'react'
import { Header } from '../partials/header'
import slideshow from '../images/Assets/Slideshow/malerspande.webp'
import { Sectionstyle } from '../style/home.style'
import { Footer } from '../partials/footer'
import artone from '../images/Assets/Layout/art-one.webp'
import arttwo from '../images/Assets/Layout/art-two.webp'

export const Home = () => {
    return (
        <>
            <Header />
            <Sectionstyle>
                <section>
                    <div className='main'>
                        <img src={slideshow} alt="" />
                        <div className='onmain'>
                            <h1>Find og anmeld genbrugsstationer</h1>
                            <a href="/recycling">Find station</a>
                            <a href="/login">Log ind</a>
                        </div>
                    </div>



                </section>


                <article className='artone'>
                    <div>
                        <h2>Din <span>guide til sortering</span> </h2>
                        <p>Her kan du se hvordan du skal sortere og hvad der skal i hvilke beholdere. Du får også tips og tricks til, hvordan du gør det nemt at sortere hjemme hos dig.</p>
                        <a href="/sortering">Se affaldsguide</a>
                    </div>

                    <div className='pic'>
                    <img src={artone} alt="affald" />
                    </div>
                </article>


                <article className='arttwo'>
                    <div className='pic'>
                        <img src={arttwo} alt="skraldespande" />
                    </div>

                    <div>
                        <h2>bestil <span>din nye affaldsbeholder</span> </h2>
                        <p>when an unknown printer took a galley of type and scramble it to make a type specimen book. It has survived not only</p>
                        <a href="/order">Bestil nu</a>
                    </div>

                </article>
            </Sectionstyle>
            <Footer />
        </>
    )
}
