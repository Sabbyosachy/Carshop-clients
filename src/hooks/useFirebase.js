import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import initializeAuthentication from '../Pages/Shared/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const [email, setEmail] = useState('');
    const[isLoading,setIsLoading]=useState(true);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [admin,setAdmin]=useState(false);
    
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
// check if login or not
    const checkedIsLogin = event =>{
        setIsLogin(event.target.checked);
    }

    const handleEmailChange = event => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }
    const handleNameChange = event => {
        setName(event.target.value);
    }
// form handler
    const handleSubmit = event =>{
        event.preventDefault();
        if(password.length < 6){
            setError("Password Must be at least 6 characters long.");
            return;
        }

        isLogin? processToLogin(email, password): processToRegister(email,password);
    }
// register
    const processToRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
        verifyEmail();
        setUserName();
        saveUser(email,name);
      })
      .catch((error) => {
        setError(error.message);
      });
    }
// login via email and password
    const processToLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        signInWithEmailAndPassword()
        .then((result) => {
            const user = result.user;
            setUser(user);
            setError("");
          })
          .catch((error) => {
            setError(error.message);
            setError(error.code)
          });
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name }).then((result) => {});
      };
// check current user sill logged in or not
    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user);
            }
            else{
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
// verify new user by mail
    const verifyEmail = () =>{
      sendEmailVerification(auth.currentUser)
      .then(result=>{
        console.log(result);
      })
    };
// forget /reset password
    const handleResetPass = () => {
      sendPasswordResetEmail(auth, email)
      .then(result=>{
        console.log(result);
      })
    }

    useEffect(()=>{
        fetch(`https://shielded-sea-86684.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.Admin));
    },[user.email])

// logout 
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
           
          })
          .finally(()=>setIsLoading(false));
    }
    
    //Save User

    const saveUser=(email,displayName)=>{
       const user={email,displayName};
       fetch('https://shielded-sea-86684.herokuapp.com/users',{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(user)
       })
       .then()
    }

  
      
    return {
        signInUsingGoogle,
        logOut,
        admin,
        checkedIsLogin,
        handleSubmit,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleResetPass,
        isLogin,
        user,
        setUser,
        setError,
        email,
        name,
       saveUser,
        error,
        isLoading,
        setIsLoading
    }
};

export default useFirebase;