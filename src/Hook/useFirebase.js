// import { useState } from "react"
// import firebaseInitializeConfig from "../Firebase/Firebase.init"
// import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile  } from "firebase/auth";

// firebaseInitializeConfig()

// const useFirebase =()=>{

//     const [user ,setUser]= useState([]);
//     const [email , setEmail]= useState('');
//     const [password , setPassword]= useState('');
//     const [error , setError] = useState('');
//     const [name, setName]= useState('');
//     const auth = getAuth()
//     const [login , setLogin]=useState(false) ;

//     console.log(email, password, name,'hhhh')

//     const handleSubmit = (e)=>{
//         e.preventDefault()
//         if(password.length < 6){
//             setError('password must be 6 charactor long')
//             return
//           } if(!/(?=.*[A-Z].*[A-Z])/.test(password) ){
//             setError('password must contain tow uppercase')
//             return
//           }
//           setError('')
//         logInProcess(email, password) 
         
//         createNewUser(email, password)
//         console.log(user)
//         console.log(email, password, name,'hhhh')
//     }

//     const handleEmail=(e)=>{
//         const user= e.target.value;
//         setEmail(e.target.value)

//    }


//    const handlePassword =(e)=>{
//     setPassword(e.target.value);

//    }

//    const handleName=(e)=>{
//     setName(e.target.value)

//    }

//    const setUserName=()=>{
//     updateProfile(auth.currentUser , {displayName:name})
//     .then(result=>{

//     })
//    }

//    const logInProcess=(email, password)=>{
//     signInWithEmailAndPassword(auth, email, password)
//     .then(result=>{
//         setUser(result.user).catch(error=>{
//             // setLogin(result.user)
//             setError(error.massage)
//         })
//     })
//    }

//    const createNewUser=(email , password)=>{
//     createUserWithEmailAndPassword(auth, email , password )
//     .then(result=>{
//         setUser(result.user)
//         setUserName()
//     }).catch(error=>{
//         setError(error.massage)
//     })
//    }





//    return {handleSubmit,handleEmail ,handlePassword ,handleName, user, error}





// }


// export default useFirebase;