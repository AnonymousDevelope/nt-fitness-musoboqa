import React, { memo } from "react";
import { Logo } from "../../assets/images/png";
import {  Circle, Information, Ruka, SmsIcon } from "../../assets/react-icons";
const index = memo(() => {
  return (
    <section className="login">
      <div className="login__left">
        <div style={{ backgroundImage: `url(${Logo})` }} className="logo__img">
          <h2>Login</h2>
        </div>
        <p>qisqacha ta'rif</p>
        <Circle className='login__circle' />
      </div>
      <div className="login__right">
        {
          true ? (
            <form className="login__form">
              <Ruka className="ruka" />
              <h1>Welcome back!</h1>
              <p>Please login to access your account.</p>
              <label className="login__email" htmlFor="email">
                <span>G-mail </span><Information className="information" />
              </label>
              <input type="email" id="email" placeholder="Type your g-mail " />
              <span className="password__title">password</span>
              <label className="login__password" htmlFor="password">
                <input type="password" id="password" placeholder="Type your pasword" />
              </label>
              <h6 className="Forgot">Forgot Pasword?</h6>
              <button className="login__submit">Log In</button>

              <h5 className="account"> Don't have an account? <span>Sign Up</span></h5>
            </form>
          ) : (
            <form className="sms__forma">
              <h1 className="Second">Second Step Verification </h1>
              <SmsIcon className='telefon'/>
              <p className="verification">Enter the verification code we sent to</p>
              <h4 className="sms__email">demo@gmail.com</h4>
              <input type="text"  placeholder="Type code here"/>
              <button>Submit</button>
              <h5 className="gate">Didn't gate the code?<span> Resend</span></h5>
              <h6 className="call">Call me</h6>
            </form>
          )
        }
      </div>
    </section>


)});

export default index;
