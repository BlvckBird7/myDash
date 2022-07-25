import React from 'react'
import Form from './Form'
import "../components/scss/SignUp.css"

const Sign_Up = () => {
  return (
    <div className="sign-up">
        <div className="bg-image">
            <div className="text-bottom">
            <h2>Choose a date to range</h2>
            <p>Lorem Ipsum is simply dummy text of <br />the printing and typesetting industry</p>
            </div>

        </div>
        <div className="form">
           <Form />
        </div>
    </div>
  )
}

export default Sign_Up