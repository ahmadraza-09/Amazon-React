import { useNavigate } from "react-router-dom";


const Registercomp = () => {

  const navigate = useNavigate();

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
    <div className="register-main-section">
      <div className="login-box">
        <h3>Create Account</h3>
        <div className="input-box">
          <label>Your name</label>
          <input type="text" placeholder="First and last name" />
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
            <input type="text" placeholder="Mobile number" />
          </div>
        </div>
        <div className="input-box">
          <label>Email (optional)</label>
          <input type="text" />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="At least 6 characters" />
          <div className="alert-box">Passwords must be at least 6 characters.</div>
        </div>
        <p>
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>
        <button>Verify mobile number</button>
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
    </div>

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
