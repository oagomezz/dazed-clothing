import React from 'react'
import { signInWithGooglePopup, createUserDocumentfromAuth } from '../../utils/firebase.utils' 


const Sign_in = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentfromAuth(user)
  }
  return (
    <div>
      <div>Sign in Page</div>
      <button onClick={ logGoogleUser }>
        Sign in with Google Popup
      </button>
    </div>
  )
}

export default Sign_in