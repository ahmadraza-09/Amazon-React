import logo from '../Images/amazon-logo.png';

const Header = () => {
    return (
        <>
        <header id="#top" >

            {/* Opacity Box */}
            <div className="header-opacity-box"></div>

            {/* Navbar */}
            <div className="navbar">

                {/* Nav Logo */}
                <div className="nav-logo border">
                    <a href="index.html"><img src={logo} alt="Amazon Logo"/> </a>
                    <p>.in</p>
                </div>

                {/* Nav Address */}
                <div className="nav-address border" onclick="showLocationDiv(); showMainOpacity();">
                    <p className="add-first">Deliver to</p>
                    <div className="add-icon">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="location-text">Add Location </p>
                    </div>

                    <div className="select-location-div">
                        <div className="select-location">
                            <div className="header">
                                <h3>Choose your location</h3>
                            </div>

                            <div className="location-main">
                                <button>Add Current Location</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nav Search  */}
                <div className="nav-search">
                    <select className="search-select" >
                        <option>All</option>
                        <option value="">Books</option>
                        <option value="">Clothes</option>
                        <option value="">Alexa Talk</option>
                        <option value="">Furniture</option>
                        <option value="">Mini Premium</option>
                    </select>
                    <input placeholder="Search Amazon.in" className="search-input" onclick="showMainOpacity(); showBorder();"/>
                    <div className="search-icon search-color">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                {/* Nav Language  */}
                <div className="nav-lang border" onmouseover="showMainOpacity();" onmouseout="removeOpacity();">
                    <div className="nav-lang-icon">
                        <img src="../Images/india-flag-icon.png" alt="Indian Flag"/>
                    </div>
                    
                    <div className="lang-section" >
                        <h3 className="language-value">EN</h3>
                        <i className="fa-solid fa-sort-down"></i>

                        {/* Language Dropdown */}
                        <div className="lang-dropdown">
                            <div className="langauage-default flex-div lang-div">
                                <input name="language" type="radio" value="EN" onclick="changeLangValue('EN');" />
                                <h3>English - EN</h3>
                            </div>
                            
                            <div className="language-list">
                                <div className="flex-div lang-div">
                                    <input name="language" type="radio" value="HI" onclick="changeLangValue('HI');"/>
                                    <h3>हिन्दी - HI</h3>
                                </div>
                                <div className="flex-div lang-div">
                                    <input name="language" type="radio" value="TA" onclick="changeLangValue('TA');"/>
                                    <h3>தமிழ் - TA</h3>
                                </div>
                                <div className="flex-div lang-div">
                                    <input name="language" type="radio" value="TE" onclick="changeLangValue('TE');"/>
                                    <h3>తెలుగు - TE</h3>
                                </div>
                                <div className="flex-div lang-div">
                                    <input name="language" type="radio" value="KN" onclick="changeLangValue('KN');"/>
                                    <h3>ಕನ್ನಡ - KN</h3>
                                </div>
                                <div className="flex-div lang-div">
                                    <input name="language" type="radio" value="ML" onclick="changeLangValue('ML');"/>
                                    <h3>മലയാളം - ML</h3>
                                </div>
                                <div className="flex-div lang-div">
                                    <input name="language" type="radio" value="BN" onclick="changeLangValue('BN');"/>
                                    <h3>বাংলা - BN</h3>
                                </div>
                                <div className="flex-div lang-div">
                                    <input name="language" type="radio" value="MR" onclick="changeLangValue('MR');"/>
                                    <h3>मराठी - MR</h3>
                                </div>

                                <a href="#" className="lang-learn-more">Learn More</a>

                            </div>   

                            {/* Language Dropdown Footer */}
                            <div className="lang-dropdown-footer">
                                <div className="footer-paragraph flex-div">
                                    <img src="../Images/india-flag-icon.png" alt="Indian Flag"/>
                                    <p>You are shopping on Amazon.in</p>
                                </div>

                                <div className="country-region">
                                    <a href="#">Change country/region</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nav Signin */}
                <div className="nav-signin border signin-order" onmouseover="showMainOpacity();" onmouseout="removeOpacity();">
                    <li><span>Hello, Sign in</span></li>
                    <li className="nav-sec">
                        <a href="#">Account & Lists</a>
                        <i className="fa-solid fa-sort-down"></i>
                        <ul className="nav-dropdown">
                            <div className="nav-login">
                                <a href="./Login/login.html"><button>Sign in</button></a>
                                <p>New customer ? <a href="./Signup/signup.html"><span>Start here.</span></a></p>
                            </div>

                            <div className="nav-list-account">
                                <div className="nav-list">
                                    <h3>Your Lists</h3>

                                    <div className="lists">
                                        <li>Create a Wish List</li>
                                        <li>Wish from Any Website</li>
                                        <li>Baby Wishlist</li>
                                        <li>Discover Your Style</li>
                                        <li>Explore Showroom</li>
                                    </div>
                                </div>

                                <div className="nav-account">
                                    <h3>Your Account</h3>
                                    <div className="lists">
                                        <li>Your Account</li>
                                        <li>Your Order</li>
                                        <li>Your Wish List</li>
                                        <li>Your Recomendations</li>
                                        <li>Your Prime Membership</li>
                                        <li>Your Prime Video</li>
                                        <li>Your Subscribe & Save Items</li>
                                        <li>Memberships & Subscriptions</li>
                                        <li>Your Seller Account</li>
                                        <li>Manage Your Content and Devices</li>
                                        <li>Your Free Amazon Business Account</li>
                                    </div>
                                </div>
                            </div>

                        </ul>
                    </li>
                </div>

                {/* Nav Order */}
                <div className="nav-return border signin-order">
                    <p><span>Returns</span></p>
                    <p className="nav-sec">& Orders</p>
                </div>

                {/* Nav Cart */}
                <div className="nav-cart border">
                    <img src="../Images/Shopping-Cart.png" alt=""/>
                    <p>Cart</p>
                </div>
            </div>

            {/* Menu Section */}
            <div className="menu-section">

                <input type="checkbox" id="check"/>
                {/* Humbergurmenu Bar */}
                <div className="humbergur-menu-bar">

                    <div className="hello-signin">
                        <div className="user-profile">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <h3>Hello, sign in</h3>

                        <label for="check" className="close-menu" onclick="removeOpacity();"><i className="fa-solid fa-xmark"></i></label> 
                    </div>

                    <div className="humbergur-sections">
                        <div className="trending-content">
                            <h3>Trending</h3>
                            <ul className="trending-links">
                                <li><a href="#">Best Sellers</a></li>
                                <li><a href="#">New Releases</a></li>
                                <li><a href="#">Movers and Shakers</a></li>
                            </ul>
                        </div>

                        <div className="digital-content trending-content">
                            <h3>Digital Content And Devices</h3>
                            <ul className="trending-links">
                                <li><a href="#">Amazon miniTV- Free entertainment</a></li>
                                <li><a href="#">Echo & Alexa</a></li>
                                <li><a href="#">Fire TV</a></li>
                                <li><a href="#">Kindle E-Readers & eBooks</a></li>
                                <li><a href="#">Audible Audiobooks</a></li>
                                <li><a href="#">Amazon Prime Video</a></li>
                                <li><a href="#">Amazon Prime Music</a></li>
                            </ul>
                        </div>

                        <div className="shop-category-content trending-content">
                            <h3>Shop By Category</h3>
                            <ul className="trending-links">
                                <li><a href="#">Mobiles, Computers</a></li>
                                <li><a href="#">TV, Appliances, Electronics</a></li>
                                <li><a href="#">Men's Fashion</a></li>
                                <li><a href="#">Women's Fashion</a></li>
                            </ul>
                        </div>

                        <div className="programs-features-content trending-content">
                            <h3>Programs & Features</h3>
                            <ul className="trending-links">
                                <li><a href="#">Amazon Pay</a></li>
                                <li><a href="#">Gift Cards & Mobile Recharges</a></li>
                                <li><a href="#">Amazon Launchpad</a></li>
                                <li><a href="#">Handloom and Handicrafts</a></li>
                            </ul>
                        </div>

                        <div className="help-settings-content trending-content">
                            <h3>Help & Settings</h3>
                            <ul className="trending-links">
                                <li><a href="#">Your Account</a></li>
                                <li><a href="#">Customer Sevice</a></li>
                                <li><a href="Login/login.html">Sign in</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <label for="check" className="humbergur-menu border2" onclick="showMainOpacity(); showHeaderOpacity();" >
                    <label for="check" className="open-menu"><i className="fa-solid fa-bars"></i></label>
                    All
                </label>

                {/* Menus List Options */}
                <ul className="menu-ops">
                    <a href="#" className="border2"><li>Fresh</li></a>
                    <a href="#" className="border2"><li>Amazon mini TV</li></a>
                    <a href="#" className="border2"><li>Sell</li></a>
                    <a href="#" className="border2"><li>Best Sellers</li></a>
                    <a href="#" className="border2"><li>Today's Deals</li></a>
                    <a href="#" className="border2"><li>Mobiles</li></a>
                    <a href="#" className="border2"><li>Electronics</li></a>
                    <a href="#" className="border2"><li>Prime</li></a>
                    <a href="#" className="border2"><li>Gift Ideas</li></a>
                    <a href="#" className="border2"><li>Customer Service</li></a>
                    <a href="#" className="border2"><li>New Releases</li></a>
                    <a href="#" className="border2"><li>Home & Kitchen</li></a>
                    <a href="Product Page/product.html" className="border2"><li>Fashion</li></a>
                </ul>
            </div>
        </header>
        </>
    );
}

export default Header;