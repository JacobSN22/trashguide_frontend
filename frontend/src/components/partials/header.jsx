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
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                    <h1>Affaldsguiden</h1>
                </div>

                <div>
                    <nav>
                        <ul>
                            <li><a className='activeone' href="/">Forside</a></li>
                            <li><a className='activetwo' href="/sortering">Sortering</a></li>
                            <li><a className='activethree' href="/recycling">Genbrugsstationer</a></li>
                            <li><a className='activefour' href="/order">Bestil beholder</a></li>
                        </ul>
                    </nav>
                </div>

                <div className='loginicon'>
                    <a href="/login" aria-label="Log ind knap"><img src={unlock} alt="" /></a>
                </div>
            </header>
            </Headerstyle>
        </>
    )
}
