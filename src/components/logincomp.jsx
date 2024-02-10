
const Logincomp = () => {
  return (
    <>
      <header>
      <div class="login-logo">
        <a href="../index.html"
          ><img src="../Images/login-logo.png" alt="Amazon Logo" />
        </a>
        <p>.in</p>
      </div>
    </header>

    {/* Main */}
    <main>
      <div class="login-box">
        <h3>Sign in</h3>
        <div class="input-box">
          <label>Email or mobile phone number</label>
          <input type="text" />
        </div>
        <button>Continue</button>
        <p>
          By continuing, you agree to Amazon's
          <a href="#">Conditions of Use</a> and <a href="#">Privacy Notice.</a>
        </p>
        <div class="need-help">
          <i class="fa-solid fa-caret-right"></i>
          <a href="#">Need help?</a>
        </div>
        <div class="buy-for-work">
          <h3>Buying for work?</h3>
          <a href="#">Shop on Amazon Business</a>
        </div>
      </div>

      <div class="create-account">
        <p>New to Amazon?</p>
        <a href="../Signup/signup.html">Create your Amazon account</a>
      </div>
    </main>

    <footer>
      <div class="links-copyright">
        <div class="links-section">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>

        <div class="copyright-section">
          <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </footer>
    </>
  );
}

export default Logincomp;
