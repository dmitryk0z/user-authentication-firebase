import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    if (error) {
      console.error(error); // Log the error for debugging purposes
    }
  }, [error]);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError(''); // Clear the error message
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setError(''); // Clear the error message
        setSignedIn(true);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setSignedIn(false);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="container">
      <h1 className="title">Authentication Example</h1>
      {signedIn ? (
        <div className="content">
          <h2 className="header">Homepage</h2>
          <button className="sign-out-button" onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="content">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className="sign-in-button" onClick={handleSignIn}>Sign In</button>
            <button className="sign-up-button" onClick={handleSignUp}>Sign Up</button>          
        </div>
      )}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default App;
