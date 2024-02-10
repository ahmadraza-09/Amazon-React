
const Logincomp = () => {
  return (
    <>
    <div className="login-header-section">
      <div className="login-logo">
        <a href="../index.html"
          ><img src="../Images/login-logo.png" alt="Amazon Logo" />
        </a>
        <p>.in</p>
      </div>
    </div>

    {/* Main */}
    <div className="login-main-section">
      <div className="login-box">
        <h3>Sign in</h3>
        <div className="input-box">
          <label>Email or mobile phone number</label>
          <input type="text" />
        </div>
        <button>Continue</button>
        <p>
          By continuing, you agree to Amazon's
          <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a>
        </p>
        <div className="need-help">
          <i className="fa-solid fa-caret-right"></i>
          <a href="#">Need help?</a>
        </div>
        <div className="buy-for-work">
          <h3>Buying for work?</h3>
          <a href="#">Shop on Amazon Business</a>
        </div>
      </div>

      <div className="create-account">
        <p>New to Amazon?</p>
        <a href="../Signup/signup.html">Create your Amazon account</a>
      </div>
    </div>

    <div className="login-footer-section">
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
  );
}

export default Logincomp;
