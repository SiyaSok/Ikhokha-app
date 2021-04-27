import React, { createContext, useState } from 'react';

import API from "../component/util/auth";



export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {


    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));;
    const [formData, setformData] = useState({ name: "", lastName: "", email: "", password: "", confirmPassword: "" });

    const saveUser = (User) => {

        try {
            localStorage.setItem('profile', JSON.stringify({ ...User }));
            setUser(JSON.parse(localStorage.getItem('profile')));

        } catch (error) {
            console.log(error)
        }

    }


    const logOut = () => {
        setUser(null);
        localStorage.clear();
    }

    const onInputChange = (e) => {

        setformData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSignUp = async () => {


        try {
            const res = await API.post('/users/sign-up', { formData })
            setformData({ name: "", lastName: "", email: "", password: "", confirmPassword: "" });
            console.log(res);


            saveUser(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    const onSignIn = async () => {
        try {
            const res = await API.post('/users/sign-in', { formData })
            setformData({ name: "", lastName: "", email: "", password: "", confirmPassword: "" });
            saveUser(res.data);

            return (res);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (

        <AuthContext.Provider
            value={{
                user,
                newUser,
                formData,
                setUser,
                setNewUser,
                saveUser,
                logOut,
                onInputChange,
                onSignUp
                , onSignIn
            }}>
            {children}
        </AuthContext.Provider>
    )



}

export default AuthContextProvider;