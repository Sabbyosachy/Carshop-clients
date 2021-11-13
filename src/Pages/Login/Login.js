import React from 'react';
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const{handleSubmit,saveUser,isLogin,setIsLoading, handleEmailChange, handlePasswordChange, handleNameChange, checkedIsLogin, signInUsingGoogle, handleResetPass, error, setUser}=useAuth();
    const location = useLocation();
    const history = useHistory();
    // handle redirecting using google login
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInUsingGoogle()
        .then((result) => {
            const user = result.user;
            setUser(user);
            saveUser(user.email,user.displayName,'PUT');
            history.push(location.state?.from || '/home');
          })
          .finally(()=>setIsLoading(false));
    }
    return (
        <div className="row container">
            <div className="col-md-8">
                <div className="py-5">
                <img className="w-100" src="https://i.ibb.co/yWJvNXp/EIChxr-WX4-AEzq-Ai.jpg" alt="" srcset="" />
                </div>
              
            </div>
            <div className="col-md-4">
            <div className="login py-5 my-5">
        <form onSubmit={handleSubmit}>
            <h2 className="font-bold text-center text-red-400">Please {isLogin ? "Login" : "Register"}</h2>
            {
                !isLogin && <input onChange={handleNameChange} type="text" placeholder="Your Name" />
            }
            <br />
            <input onChange={handleEmailChange} type="email" placeholder="Your Email" /> <br />
            <input onChange={handlePasswordChange} type="password" placeholder="Your Password" /> <br />
            <input onChange={checkedIsLogin} type="checkbox" id="registered" value="registered"/>
            <label htmlFor="registered"> Already Registered ?</label><br/>
            <p>{error}</p>
            <div className="text-center">
            <button type="submit"  className="btn__login">{isLogin ? 'Login' : 'Register'}</button> <br />
            {
                isLogin && <button type="submit" onClick={handleResetPass} className="btn__login">Forget Password</button>
            }
            </div>
        </form>
        <button onClick={handleGoogleSignIn} className="btn__login">Google Sign In</button>
    </div>
            </div>
        </div>
    );
};

export default Login;