import { useState } from 'react'

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase.utils.js'

import FormInput from '../formInput/formInput.component.js'
import Button from '../button/button.component'

import './SignInForm.styles.scss'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }
    
    const signInWithGoogle = async () => {
        signInWithGooglePopup()
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const {user} = await signInAuthUserWithEmailAndPassword(
                email, 
                password
            );

            resetFormFields();
        } catch(err){
            if (err.code){
                alert('Incorrect email or password, Please try again')
            } else {
                console.error(err)
            }
        }
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    required
                    label='Email'
                    autoComplete='off'
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={handleChange}/>

                <FormInput 
                    required
                    label='Password'
                    autoComplete='off'
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange}/>
                <div className='buttons-container'>
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' buttonType='google' onClick={ signInWithGoogle }>
                    Google Sign In
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm