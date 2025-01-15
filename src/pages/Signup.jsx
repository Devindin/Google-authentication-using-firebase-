import React, { useState } from "react";
import { getAuth, 
  createUserWithEmailAndPassword ,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Signup() {  // Capitalized 'S' in 'Signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert('User created successfully'))
      .catch((error) => alert('Error: ' + error.message));
  };

  const signUpWithGoogle=()=>{
    signInWithPopup(auth,googleProvider);
  }

  return (
    <div className="signup-page">
        <h1>Sign up page</h1>
      <label>Email</label>
      <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="email" 
        required 
        placeholder="Enter your email" 
      />
      <label>Password</label>
      <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        required 
        placeholder="Enter your password" 
      />
      <br/>
       <button onClick={signUpWithGoogle}>Sign up with google</button>
       <br/>
      <button onClick={createUser}>Sign up</button>
    </div>
  );
}

export default Signup;
