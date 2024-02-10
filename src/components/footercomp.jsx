
const Footercomp = () => {
    return (
        <>
        {/* Footer */}
        <footer onclick="removeOpacity();">
        <div className="back-to-top">
            <a href="#top"> Back to Top </a>
        </div>

        <div className="footer-contents">
            <div className="footer-text-content">
            <div className="footer-text-box">
                <h3>Get to Know Us</h3>
                <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press Releases</a></li>
                <li><a href="#">Amazon Science</a></li>
                </ul>
            </div>

            <div className="footer-text-box">
                <h3>Connect with Us</h3>
                <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
                </ul>
            </div>

            <div className="footer-text-box">
                <h3>Make Money with Us</h3>
                <ul>
                <li><a href="#">Sell on Amazon</a></li>
                <li><a href="#">Sell under Amazon Accelerator</a></li>
                <li><a href="#">Protect and Build Your Brand</a></li>
                <li><a href="#">Amazon Global Selling</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Fulfilment by Amazon</a></li>
                <li><a href="#">Advertise Your Products</a></li>
                <li><a href="#">Amazon Pay on Merchants</a></li>
                </ul>
            </div>

            <div className="footer-text-box">
                <h3>Let Us Help You</h3>
                <ul>
                <li><a href="#">COVID-19 and Amazon</a></li>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Returns Centre</a></li>
                <li><a href="#">100% Purchase Protection</a></li>
                <li><a href="#">Amazon App Download</a></li>
                <li><a href="#">Help</a></li>
                </ul>
            </div>
            </div>

            <div className="footer-country-content">
            <div className="footer-language flex-div">
                <img src="Images/amazon-logo.png" alt="" />
                <div className="footer-language-box flex-div">
                <img src="Images/globe.png" alt="" />
                <p>English</p>
                <div className="footer-arrow">
                    <i className="fa-solid fa-caret-up"></i>
                    <i className="fa-solid fa-caret-down"></i>
                </div>

                {/* Language Dropdown */}
                <div className="footer-lang-dropdown">
                    <div className="footer-langauage-default flex-div lang-div">
                    <input name="language" type="radio" />
                    <h3>English - EN</h3>
                    </div>

                    <div className="footer-language-list">
                    <div className="flex-div lang-div">
                        <input name="language" type="radio" />
                        <h3>हिन्दी - HI</h3>
                    </div>
                    <div className="flex-div lang-div">
                        <input name="language" type="radio" />
                        <h3>தமிழ் - TA</h3>
                    </div>
                    <div className="flex-div lang-div">
                        <input name="language" type="radio" />
                        <h3>తెలుగు - TE</h3>
                    </div>
                    <div className="flex-div lang-div">
                        <input name="language" type="radio" />
                        <h3>ಕನ್ನಡ - KN</h3>
                    </div>
                    <div className="flex-div lang-div">
                        <input name="language" type="radio" />
                        <h3>മലയാളം - ML</h3>
                    </div>
                    <div className="flex-div lang-div">
                        <input name="language" type="radio" />
                        <h3>বাংলা - BN</h3>
                    </div>
                    <div className="flex-div lang-div">
                        <input name="language" type="radio" />
                        <h3>मराठी - MR</h3>
                    </div>

                    <a href="#" className="footer-lang-learn-more">Learn More</a>
                    </div>

                    {/* Language Dropdown Footer  */}
                    <div className="footer-lang-dropdown-footer">
                    <div className="footer-footer-paragraph flex-div">
                        <img src="Images/india-flag-icon.png" alt="Indian Flag" />
                        <p>You are shopping on Amazon.in</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="footer-country">
                <ul>
                <li><a href="#">Australia</a></li>
                <li><a href="#">Brazil</a></li>
                <li><a href="#">Canada</a></li>
                <li><a href="#">China</a></li>
                <li><a href="#">France</a></li>
                <li><a href="#">Germany</a></li>
                <li><a href="#">Italy</a></li>
                <li><a href="#">Japan</a></li>
                <li><a href="#">Maxico</a></li>
                <li><a href="#">Netherlands</a></li>
                <li><a href="#">Poland</a></li>
                <li><a href="#">Singapore</a></li>
                <li><a href="#">Spain</a></li>
                <li><a href="#">Turkey</a></li>
                <li><a href="#">United Arab Emirates</a></li>
                <li><a href="#">United Kingdom</a></li>
                <li><a href="#">United States</a></li>
                </ul>
            </div>
            </div>
        </div>

        <div className="footer-links-copyright">
            <div className="footer-links">
            <div className="footer-links1">
                <ul className="link-box">
                <h3>AbeBooks</h3>
                <li>
                    <a href="#"
                    >Books, art & <br />
                    collectibles</a
                    >
                </li>
                </ul>
                <ul className="link-box">
                <h3>Amazon Web Services</h3>
                <li>
                    <a href="#"
                    >Scalable Cloud <br />
                    Computing Services</a
                    >
                </li>
                </ul>
                <ul className="link-box">
                <h3>Audible</h3>
                <li>
                    <a href="#"
                    >Download <br />
                    Audio Books</a
                    >
                </li>
                </ul>
                <ul className="link-box">
                <h3>IMDb</h3>
                <li>
                    <a href="#"
                    >Movies, TV <br />
                    & Celebrities</a
                    >
                </li>
                </ul>
            </div>
            <div className="footer-links2">
                <ul className="link-box">
                <h3>Shopbop</h3>
                <li>
                    <a href="#"
                    >Designer <br />
                    Fashion Brands</a
                    >
                </li>
                </ul>
                <ul className="link-box">
                <h3>Amazon Business</h3>
                <li>
                    <a href="#"
                    >Everything For <br />
                    Your Business</a
                    >
                </li>
                </ul>
                <ul className="link-box">
                <h3>Prime Now</h3>
                <li>
                    <a href="#"
                    >2-Hour Delivery <br />
                    on Everyday Items</a
                    >
                </li>
                </ul>
                <ul className="link-box">
                <h3>Amazon Prime Music</h3>
                <li>
                    <a href="#"
                    >100 million songs, ad-free <br />
                    Over 15 million podcast episodes</a
                    >
                </li>
                </ul>
            </div>
            </div>

            <div className="footer-copyright">
            <div className="copyright-links">
                <a href="#">Conditions of Use & Sale</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Intrest-Based Ads</a>
            </div>
            <div className="copyright-text">
                © 1996-2024, Amazon.com, Inc. or its affiliates
            </div>
            </div>
        </div>
        </footer>
        </>
    );
}

export default Footercomp;