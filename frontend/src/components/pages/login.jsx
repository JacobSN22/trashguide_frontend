import axios from 'axios'
import React from 'react'
import { useAuth } from '../provider/authprovider'
import { Header } from '../partials/header'
import { Footer } from '../partials/footer'
import { Loginstyle } from '../style/login.style'
import logo from '../images/Assets/Layout/logo.svg'
import eye from '../images/Assets/Layout/eye-fill.svg'


export const Login = () => {
    const { loginData, setLoginData } = useAuth()
    // console.log(loginData);

    const submitHandle = async e => {
        const formdata = new URLSearchParams()
        //Appender vores username og pass til databasen
        formdata.append('username', e.target.form.username.value)
        formdata.append('password', e.target.form.password.value)

        const endpoint = `http://localhost:4000/login`
        try {
            const result = await axios.post(endpoint, formdata)
            handleSessionData(result.data);
        } catch (err) {
            console.error(`Kunne ikke logge ind: ${err}`);
        }
    }

    const handleSessionData = data => {
        if (data) {
            // console.log(data);
            // Sætter token til json object med vores data
            sessionStorage.setItem("token", JSON.stringify(data))
            setLoginData(data)
        }
    }


    const Logout = () => {
        // Fjerner vores token og sætter login data til ingenting
        sessionStorage.removeItem("token")
        setLoginData('')
    }

    const showPassword = () => {
        const show = document.getElementById("show");
        if (show.type === "password") {
            show.type = "text";
        } else {
            show.type = "password";
        }
    }

    return (
        <>
            <Header />
            <Loginstyle>
                {!loginData.access_token ? (
                    <>
                        <section>
                            <div className='text'>
                                <img src={logo} alt="Logo" />
                                <h2>Affaldsguiden</h2>
                                <h1>Log ind på Affaldsguiden for at anmelde stationer</h1>

                            </div>

                            <form method="POST">
                                <div className='formbutton'>
                                    <h2>Log ind</h2>
                                    <input type="text" name='username' placeholder='E-mail' /><br />
                                    <input type="password" name='password' placeholder='Password' id='show' />
                                    <div className='showbutton'>
                                        <p>Vis kode</p>
                                        <button type='button' onClick={() => showPassword()}><img src={eye} alt="eye" /></button>
                                    </div>

                                </div>

                                <div className='button'>
                                    <button type='button' onClick={e => submitHandle(e)}>Log ind</button>
                                </div>
                            </form>
                        </section>
                    </>

                ) : (
                    <div className='loggedin'>
                        <p>Du er logget ind</p>
                        <button onClick={() => Logout()}>Log ud</button>
                    </div>
                )
                }
                <Footer />
            </Loginstyle>
        </>
    )
}
