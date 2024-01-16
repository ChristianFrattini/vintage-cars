import './login-form.styles.scss'

import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth, signInAuthUserWithEmailAndPassword} from '../../utils/firebase.utils'

const Login=()=>{

    const defaultFormFields={
        email: '',
        password:''
    }

    const [formFields,setFormFields]=useState(defaultFormFields)
    const {email, password}=formFields



    const onChangeHandler=()=>{
        const {name, value}=event.target
        setFormFields({...formFields, [name]:value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
       try{
        const {user}=await signInAuthUserWithEmailAndPassword(email,password)
        alert('logged in')
       }catch(error){
        console.log(error)
            if(error.code=='auth/wrong-password'){
                alert('Incorrect password. Try again');
            }
            if(error.code=='auth/user-not-found'){
                alert('Incorrect email. User not found');
            }
            if(error.code=='auth/invalid-credential'){
                alert('Invalid Credentials');
            }else{
                alert('An error has been encountered for log in')
            }

            setFormFields(defaultFormFields)
       }
    }

    return(
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <FormInput label='email' type='email' name='email' value ={email} onChange={onChangeHandler} required/>
                <FormInput label='password' type='password' name='password' value ={password} onChange={onChangeHandler} required/>

                <button className='submit-button'>Login</button>

            </form>
            
        </div>

    )
}

export default Login