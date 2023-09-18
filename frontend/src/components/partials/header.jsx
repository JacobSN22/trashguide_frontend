import React from 'react'
import logo from '../images/Assets/Layout/logo.svg'
import unlock from '../images/Assets/Layout/icon-unlock.svg'
import { Headerstyle } from './header.style'

export const Header = () => {
    return (
        <>
        <Headerstyle>
            <hr />
            <header>
                <div>
                    <img src={logo} alt="Logo" />
                    <h1>Affaldsguiden</h1>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a href="/">Forside</a></li>
                            <li><a href="/sortering">Sortering</a></li>
                            <li><a href="/recycling">Genbrugsstationer</a></li>
                            <li><a href="/order">Bestil beholder</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='loginicon'>
                    <a href="/login"><img src={unlock} alt="" /></a>
                    
                </div>
            </header>
            </Headerstyle>
        </>
    )
}
