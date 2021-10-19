import { useState,useEffect } from "react"
import firebaseInitializeConfig from "../Firebase/Firebase.init"
import { getAuth,signInWithPopup, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut, GoogleAuthProvider,updateProfile  } from "firebase/auth";
import { useHistory } from "react-router";

firebaseInitializeConfig()

const useFirebase =()=>{

    const [user , setUser] =useState({})
  const [email, setEmail] = useState('')
  const [password, setPassword] =useState('');
  const [error , setError] =  useState('')
  const [login , setLogin]=useState(false) ;
  const [name, setName]= useState('');
  const [isLoading , setIsLoading]=useState(true);
  const history= useHistory()
   const googleProvider = new  GoogleAuthProvider();
  const auth = getAuth()
  console.log(name)

  const handleGoogleSignIn=()=>{
    signInWithPopup(auth , googleProvider)
    .then(result=>{
        setUser(result.user)
    })
    .finally(()=>setIsLoading(false))
};

useEffect(()=>{
    const unsubscribed= onAuthStateChanged(auth , user=>{
              if(user){
                  setUser(user)
              }else{
                  setUser({})
              }
              setIsLoading(false);
          })
  
          return ()=>unsubscribed;
  
      
      },[]);

const logOut = ()=>{
    signOut(auth)
    .then(()=>{}).finally(()=>setIsLoading(false))
}


  const handelRegister=(e)=>{
    e.preventDefault()
  console.log('register added')

  if(password.length < 6){
    setError('password must be 6 charactor long')
    return
  } if(!/(?=.*[A-Z].*[A-Z])/.test(password) ){
    setError('password must contain tow uppercase')
    return
  }
  setError('')

 login ? processLogin(email, password) : createNewUser(email, password)

  }

  const handleEmail=(e)=>{
      console.log(e.target.value);
      setEmail(e.target.value);
  }

  const handlePassword=(e)=>{
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  const handleChangeName=e=>{
    console.log(e.target.value)
    setName(e.target.value)
  }

  const setUserName = () =>{
    updateProfile(auth.currentUser , {displayName:name} )
    .then(result=>{
      setUser(result)
      console.log(result.user)

    })
  }

  const createNewUser= (email , password)=>{
    createUserWithEmailAndPassword(auth, email , password)
    .then(result=>{
      console.log(result.user)
      setUserName(result.user)
      window.location.reload()
    }).catch(error=>{
      console.log(error.massage)
      setError(error.massage)
    })
  }

  const toggleLogin= e =>{
    setLogin(e.target.checked)
  }
  const processLogin = ()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then(result=>{
     setUser(result.user)
     console.log(user)
      setError('')
     
    })
  }

  return {toggleLogin,setUserName, handleChangeName ,handleEmail ,handlePassword ,handelRegister,user,login,error,handleGoogleSignIn,logOut,isLoading }

}
export default useFirebase;