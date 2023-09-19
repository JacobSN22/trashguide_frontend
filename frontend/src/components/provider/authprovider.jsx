import React, { createContext, useEffect, useState } from 'react'
import { useContext } from 'react'

const AuthContext = createContext()

const Authprovider = ({children}) => {

    const [ loginData, setLoginData ] = useState({})

    useEffect(() => {
        if(sessionStorage.getItem('token')) {
            setLoginData(JSON.parse(sessionStorage.getItem('token')))
        }
    }, [children])

  return (
    <AuthContext.Provider value={{loginData, setLoginData}}>
        {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { Authprovider, useAuth }