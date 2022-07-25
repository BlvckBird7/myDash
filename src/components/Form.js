import React, { useState } from 'react'
import {useNavigate } from "react-router-dom"
import "../components/scss/Form.css"
import { useAuth } from './utility/auth'

const Form = () => {
    const [field, setField] =useState({email:'', password:"", confirmPassword:"", name:'', tel:"", checkbox: false,})
    const [focus, setFocus] = useState({email: false, password: false, confirmPassword: false, tel: false,})
	const navigate = useNavigate()
    const auth = useAuth()


    const handleSubmit=(e)=>{
      e.preventDefault();
    auth.login(field.email, field.password === field.confirmPassword, field.name)
      
    alert('Registration succsessful; Press "OK" ')
     navigate("/chart ", {replace: true});
     }

     const handleFocus =(e)=>{
        setFocus(true);
      };

  return (
    <form onSubmit={handleSubmit}>
    <h1 className="create-account-label">Create an account</h1>
    <div className='input-field'>
        <label>Your email</label>
        <input type="email" className="input" placeholder="" value={field.email} onChange={(e)=>{setField({...field, email:e.target.value})}} onBlur={handleFocus} required focus={focus.toString()}/>
        <span>this field is required</span>
    </div>
    <div className='input-field'>
        <label>Your password</label>
        <input type="password" className="input" placeholder="" value={field.password} onChange={(e)=>{setField({...field, password:e.target.value})}} onBlur={handleFocus} required focus={focus.toString()}/>
        <span>this field is required</span>
    </div>
    <div className='input-field'>
        <label>Confirm your password</label>
        <input type="password" className="input" placeholder="" value={field.confirmPassword} onChange={(e)=>{setField({...field, confirmPassword:e.target.value})}}/>
        <span>this field is required</span>
    </div>
    <div className='input-field'>
        <label>Your full name</label>
        <input type="name" className="input" placeholder="" value={field.name} onChange={(e)=>{setField({...field, name:e.target.value})}}/>
    </div>
    <div className='input-field'>
        <label>Your phone number</label>
        <input type="tel" className="input" placeholder="" value={field.tel} onChange={(e)=>{setField({...field, tel: e.target.value})}} onBlur={handleFocus} required focus={focus.toString()}/>
        <span>this field is required</span>
    </div>
    <div className='checkbox'>
        <input type="checkbox" value={field.checkbox} onChange={(e)=>{setField({...field, checkbox: true})}} required/>
        <label>I have read and agreed to the terms and conditions</label>
    </div>

    <button type="submit" className="btn">Create account</button>

</form>
  )
}

export default Form