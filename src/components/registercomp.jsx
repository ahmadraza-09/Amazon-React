
const Registercomp = () => {
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
        <h3>Create Account</h3>
        <div class="input-box">
          <label>Your name</label>
          <input type="text" placeholder="First and last name" />
        </div>
        <div class="input-box">
          <label>Mobile number</label>
          <div class="flex-div mobile-number">
            <div class="flex-div select-number">
              <label>IN +91</label>
              <div class="icon-box">
                <i class="fa-solid fa-sort-up"></i>
                <i class="fa-solid fa-sort-down"></i>
              </div>
            </div>
            <input type="text" placeholder="Mobile number" />
          </div>
        </div>
        <div class="input-box">
          <label>Email (optional)</label>
          <input type="text" />
        </div>
        <div class="input-box">
          <label>Password</label>
          <input type="password" placeholder="At least 6 characters" />
          <div class="alert-box">Passwords must be at least 6 characters.</div>
        </div>
        <p>
          To verify your number, we will send you a text message with a
          temporary code. Message and data rates may apply.
        </p>
        <button>Verify mobile number</button>
        <div class="buy-for-work">
          <div>
            Already have an account?
            <a href="../Login/login.html"
              >Sign in <i class="fa-solid fa-caret-right"></i
            ></a>
          </div>
          <div>
            Buying for work?
            <a href="../Login/login.html"
              >Create a free business account
              <i class="fa-solid fa-caret-right"></i
            ></a>
          </div>

          <p>
            By continuing, you agree to Amazon's
            <a href="#">Conditions of Use</a> and
            <a href="#">Privacy Notice.</a>
          </p>
        </div>
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
  )
}

export default Registercomp;
