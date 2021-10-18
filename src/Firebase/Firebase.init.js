import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitializeConfig= ()=>{
  return  initializeApp(firebaseConfig)
}

export default firebaseInitializeConfig;