import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const Registercomp = () => {

  const navigate = useNavigate();
  const[yourname, getYourname] = useState('');
  const[mobilenumber, getMobilenumber] = useState('');
  const[email, getEmail] = useState('');
  const[password, getPassword] = useState('');
    const yournameHandler =(event)=>{
        getYourname(event.target.value);
    }
    const mobilenumberHandler = (event)=>{
        getMobilenumber(event.target.value);
    }

    const emailHandler = (event)=>{
        getEmail(event.target.value);
    }
    const passwordHandler = (event)=>{
        getPassword(event.target.value);
    }
    const verifyHandler = (e)=>{
        e.preventDefault();
        const registrationData = {yourname: yourname, email: email, password: password, mobilenumber: mobilenumber}
        // console.log('Name:-'+yourname + 'Mobile Number:-'+mobilenumber + 'Email:- '+email + 'Password: '+password) 
        return axios.post('http://localhost:8080/auth/registeration', registrationData).then((response) => {
          console.log(registrationData);
        })
        getYourname('')
        getMobilenumber('')
        getEmail('')
        getPassword('')
        
    }

  return (
    <>
    <div className="register-header-section">
      <div className="login-logo">
        <a onClick={() => {navigate('/')}}
          ><img src="../Images/login-logo.png" alt="Amazon Logo" />
        </a>
        <p>.in</p>
      </div>
    </div>

    {/* Main */}
    <form className="register-main-section">
      <div className="login-box">
        <h3>Create Account</h3>
        <div className="input-box">
          <label>Your name</label>
          <input type="text" name="yourname" value={yourname} onChange={yournameHandler} placeholder="First and Last name" />
        </div>
        <div className="input-box">
          <label>Mobile number</label>
          <div className="flex-div mobile-number">
            <div className="flex-div select-number">
              <label>IN +91</label>
              <div className="icon-box">
                <i className="fa-solid fa-sort-up"></i>
                <i className="fa-solid fa-sort-down"></i>
              </div>
            </div>
            <input type="text" name="mobilenumber" value={mobilenumber} onChange={mobilenumberHandler} placeholder="Mobile number" />
          </div>
        </div>
        <div className="input-box">
          <label>Email (optional)</label>
          <input type="text" name="email" value={email} onChange={emailHandler}/>
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" name="password" value={password} onChange={passwordHandler} placeholder="At least 6 characters" />
          <div className="alert-box">Passwords must be at least 6 characters.</div>
        </div>
        <p>
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>
        <button type="submit" value="registration" onClick={verifyHandler}>Verify mobile number</button>
        <div className="buy-for-work">
          <div>
            Already have an account?
            <a onClick={() => {navigate('/login')}}
              >Sign in <i className="fa-solid fa-caret-right"></i
            ></a>
          </div>
          <div>
            Buying for work?
            <a href="../Login/login.html"
              > Create a free business account
              <i className="fa-solid fa-caret-right"></i
            ></a>
          </div>

          <p>
            By continuing, you agree to Amazon's
            <a href="#"> Conditions of Use</a> and
            <a href="#"> Privacy Notice.</a>
          </p>
        </div>
      </div>
    </form>

    <div className="register-footer-section">
      <div className="links-copyright">
        <div className="links-section">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>

        <div className="copyright-section">
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Registercomp;
