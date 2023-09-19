import axios from 'axios'
import React from 'react'
import { useAuth } from '../provider/authprovider'
import { Header } from '../partials/header'
import { Footer } from '../partials/footer'

export const Login = () => {
    const { loginData, setLoginData } = useAuth()
    // console.log(loginData);

    const submitHandle = async e => {
        const formdata = new URLSearchParams()
        formdata.append('username', e.target.form.username.value)
        formdata.append('password', e.target.form.password.value)

        const endpoint = `http://localhost:4000/login`
        try {
            const result = await axios.post(endpoint, formdata)
            handleSessionData(result.data);
        } catch(err) {
            console.error(`Kunne ikke logge ind: ${err}`);
        }
    }

    const handleSessionData = data => {
        if(data) {
            // console.log(data);
            sessionStorage.setItem("token", JSON.stringify(data))
            setLoginData(data)
        }
    }


    const Logout = () => {
        sessionStorage.removeItem("token")
        setLoginData('')
    }

  return (
    <>
    <Header />
    {!loginData.access_token ? (
    <form method="POST">
        <div>
            <input type="text" name='username' placeholder='email'/><br />
            <input type="password" name='password' placeholder='password'/>
        </div>

        <div>
            <button type='button' onClick={e => submitHandle(e)}>Login</button>
        </div>
    </form>
    ) : (
        <div>
            <p>Du er logget ind</p>
            <button onClick={() => Logout()}>Log ud</button>
        </div>
    )
}
<Footer />

    </>
  )
}
