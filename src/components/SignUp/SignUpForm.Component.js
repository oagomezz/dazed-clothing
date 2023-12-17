import React from 'react'
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils'
import FormInput from '../formInput/formInput.component'
import './SignUpForm.styles.scss'
import Button from '../button/button.component.js'


const defaultFormFields = {
    displayName: "",
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({...formFields, [name]: value})
    }
    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert("Password's do not match");
        return;
        }
        try{
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocumentFromAuth(user, { displayName });
            
            resetFormFields();

        } catch(err){
            if(err.code === 'auth/email-already-in-use'){
                alert('An account already exists with this email')
            } else{
                console.log(err)
            }
        }
    }

    return (
        <div className='sign-up-container'>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    required 
                    autoComplete='off'
                    type='text' 
                    name='displayName' 
                    value={displayName}
                    onChange={handleChange}/>

                
                <FormInput 
                    label='Email'
                    required 
                    autoComplete='off'
                    type='email' 
                    name='email' 
                    value={email} 
                    onChange={handleChange}/>

                <FormInput 
                    label='Password'
                    required 
                    autoComplete='off'
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange}/>

                <FormInput 
                    label='Confirm Password'
                    required 
                    autoComplete='off'
                    type='password' 
                    name='confirmPassword' 
                    value={confirmPassword} 
                    onChange={handleChange}/>

                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}

export default SignUpForm