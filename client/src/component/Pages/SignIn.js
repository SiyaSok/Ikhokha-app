import React, { useContext, } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import PageHeader from '../util/PageHeader';

const SignIn = () => {
    const history = useHistory();

    const { newUser, setNewUser, saveUser, onInputChange, onSignUp, onSignIn, formData } = useContext(AuthContext);

    const googleSuccess = async (res) => {

        const User = {
            UserData: res?.profileObj,
            UserToken: res?.tokenId
        }
        saveUser(User);
        history.push('/')

    }

    const SignUp = (e) => {
        e.preventDefault();

        onSignUp();
        history.push('/blogs')

    }
    const SignIn = (e) => {
        e.preventDefault();

        onSignIn();
        history.push('/')

    }




    const googleFailure = () => {
        console.log("google Failed to Sign in ");
    }


    return (

        <div className="mx-auto container-fluid text-center">

            <PageHeader
                heading={!newUser ? `Welcome Back` : `Newbie`}
                subText={!newUser ? 'Please Sign In' : ` Please Sign up`
                }
            />

            <div className="form-signin mx-auto container text-center">
                <form className="mx-auto col-sm-6 my-4">
                    {newUser ? <div
                        className="mb-3">
                        <input type="text"
                            className="form-control mx-auto p-1"
                            id="Name"
                            name="name"
                            placeholder="John"
                            onChange={onInputChange}
                            value={formData.name}


                        />
                    </div> : null}
                    {newUser ? <div className="mb-3">
                        <input type="text"
                            className="form-control mx-auto p-1"
                            id="LastName"
                            name="lastName"
                            placeholder="Jones"
                            onChange={onInputChange}
                            value={formData.lastName}

                        />
                    </div> : null}
                    <div className="mb-3">
                        <input type="email"
                            className="form-control  mx-auto p-1 "
                            id="Email"
                            name="email"
                            placeholder="jjone@company.com"
                            onChange={onInputChange}
                            value={formData.email}

                        />
                    </div>
                    <div className="mb-3">
                        <input type="password"
                            className="form-control  mx-auto p-1 "
                            id="Password"
                            name="password"
                            placeholder="Password"
                            onChange={onInputChange}
                            value={formData.password}

                        />
                    </div>
                    {newUser ? <div className="mb-3">
                        <input type="password"
                            className="form-control  mx-auto p-1 "
                            id="ConfirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={onInputChange}
                            value={formData.confirmPassword}
                        />
                    </div> : null}
                    <GoogleLogin
                        clientId={`${process.env.REACT_APP_API_CODE}-${process.env.REACT_APP_API_KEY}`}
                        render={renderProps => (
                            <button className="btn mx-2 " onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                <i className="fab fa-google" aria-hidden="true"></i>oogle Sign In</button>
                        )}
                        buttonText="Login"
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy={'single_host_origin'}
                    />
                    {newUser ? <button type="submit"
                        className="btn "
                        onClick={SignUp}
                    >Sign Up </button> : <button type="submit"
                        className="btn "
                        onClick={SignIn}
                    >Sign In</button>}
                    {newUser ? <p className="text-center my-3" onClick={() => setNewUser(false)}>I have an account. I want to Login.</p> :
                        <p className="text-center my-3" onClick={() => setNewUser(true)}>No account? Create one here</p>

                    }
                </form>
            </div>

        </div>
    );
}

export default SignIn;