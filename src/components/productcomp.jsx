


const Productcomp = () => {

    // Offer Dropdown
    var dropdownIconDown = document.querySelector('.fa-angle-down');
    var dropdownIconUp = document.querySelector('.fa-angle-up');
    var offerDropdown = document.querySelector('.offer-dropdown');

    function showOfferDropdown() {
        dropdownIconDown.style.display = 'none';
        dropdownIconUp.style.display = 'block';
        offerDropdown.style.display = 'block';
    }

    function hideOfferDropdown() {
        dropdownIconDown.style.display = 'block';
        dropdownIconUp.style.display = 'none';
        offerDropdown.style.display = 'none';
    }



    return (
        <>
        {/* Main */}
        <div className="product-main-section">
        {/* Product Main Container */}
        <div className="product-container">
            {/* Product Left Container */}
            <div className="product-left-container">
            <div className="product-image-list">
                <div className="product-img-box">
                <img
                    src="Images/product-img1.png"
                    alt=""
                    onmouseover="changeImageSrc('Images/product-img1.png');"
                />
                </div>
                <div className="product-img-box">
                <img
                    src="Images/product-img2.png"
                    alt=""
                    onmouseover="changeImageSrc('Images/product-img2.png');"
                />
                </div>
                <div className="product-img-box">
                <img
                    src="Images/product-img3.png"
                    alt=""
                    onmouseover="changeImageSrc('Images/product-img3.png');"
                />
                </div>
                <div className="product-img-box">
                <img
                    src="Images/product-img4.png"
                    alt=""
                    onmouseover="changeImageSrc('Images/product-img4.png');"
                />
                </div>
                <div className="product-img-box">
                <img
                    src="Images/product-img5.png"
                    alt=""
                    onmouseover="changeImageSrc('Images/product-img5.png');"
                />
                </div>
                <div className="product-img-box">
                <img
                    src="Images/product-img6.png"
                    alt=""
                    onmouseover="changeImageSrc('Images/product-img6.png');"
                />
                </div>
            </div>

            <div className="product-image">
                <img
                src="Images/product-img1.png"
                alt=""
                id="product-image"
                />
            </div>
            </div>

            {/* Product Right Container */}
            <div className="product-right-container">
            {/* Product Details Left */}
            <div className="product-details-left">
                {/* Product Name Section */}
                <div className="product-name-section">
                <a href="#">Visit the Majestic Man Store</a>
                <h2>Majestic Man Men Slim Fit Casual Shirt</h2>
                <div className="product-rating">
                    <div className="rating">
                    <p>3.8</p>
                    <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                    </div>
                    <i className="fa-solid fa-chevron-down"></i>

                    <div className="rating-dropdown"></div>
                    </div>
                    <p>
                    <a href="#">635 ratings</a>
                    |
                    <a href="#">Search this page</a>
                    </p>
                </div>
                </div>

                {/* Product Price Section */}
                <div className="product-price-section">
                <div className="product-price-discount">
                    <p>-69%</p>
                    <p><sup>₹</sup>458</p>
                </div>
                <div className="product-mrp">
                    <p>M.R.P.:</p>
                    <p>₹1,499</p>
                </div>
                <div className="product-tax">
                    <p>Inclusive of all taxes</p>
                </div>
                </div>

                {/* Product Offer Section */}
                <div className="product-offer-section">
                <div className="offer-top-section">
                    <div className="offer-img">
                    <img src="Images/offer-img.png" alt="" />
                    <h3>Offers</h3>
                    </div>

                    <div className="offer-dropdown-icons">
                    <i
                        className="fa-solid fa-angle-down"
                        onclick={showOfferDropdown}
                    ></i>
                    <i
                        className="fa-solid fa-angle-up"
                        onclick={hideOfferDropdown}
                    ></i>
                    </div>
                </div>

                <div className="offer-dropdown">
                    <h3>Partner Offers</h3>
                    <p>Get GST invoice and save up to 28% on business</p>
                    <a href="#">1 offer </a>
                </div>
                </div>

                {/* Facility Slider Section */}
                <div className="facility-slider-section">
                <div className="facility-slider-wrapper">
                    <button id="prev-slide" className="slide-button">
                    <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <ul className="facility-list">
                    <div className="facility-box-slider">
                        <div className="facility-box-image">
                        <img
                            className="image-item"
                            src="Images/facility-img1.png"
                            alt="img-1"
                        />
                        </div>
                        <div className="facility-text">
                        <p>10 days Return & Exchange</p>
                        </div>
                    </div>
                    <div className="facility-box-slider">
                        <div className="facility-box-image">
                        <img
                            className="image-item"
                            src="Images/facility-img2.png"
                            alt="img-1"
                        />
                        </div>
                        <div className="facility-text">
                        <p>Pay on Delivery</p>
                        </div>
                    </div>
                    <div className="facility-box-slider">
                        <div className="facility-box-image">
                        <img
                            className="image-item"
                            src="Images/facility-img3.png"
                            alt="img-1"
                        />
                        </div>
                        <div className="facility-text">
                        <p>Free Delivery</p>
                        </div>
                    </div>
                    <div className="facility-box-slider">
                        <div className="facility-box-image">
                        <img
                            className="image-item"
                            src="Images/facility-img4.png"
                            alt="img-1"
                        />
                        </div>
                        <div className="facility-text">
                        <p>Top Brand</p>
                        </div>
                    </div>
                    <div className="facility-box-slider">
                        <div className="facility-box-image">
                        <img
                            className="image-item"
                            src="Images/facility-img5.png"
                            alt="img-1"
                        />
                        </div>
                        <div className="facility-text">
                        <p>Amazon Delivered</p>
                        </div>
                    </div>
                    <div className="facility-box-slider">
                        <div className="facility-box-image">
                        <img
                            className="image-item"
                            src="Images/facility-img6.png"
                            alt="img-1"
                        />
                        </div>
                        <div className="facility-text">
                        <p>Secure transaction</p>
                        </div>
                    </div>
                    </ul>
                    <button id="next-slide" className="slide-button">
                    <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                </div>

                {/* Product Size and Color */}
                <div className="product-size-color">
                <div className="product-size">
                    <label for="">Size</label>
                    <select name="" id="">
                    <option value="">Select</option>
                    <option value="">S</option>
                    <option value="">M</option>
                    <option value="">L</option>
                    <option value="">XL</option>
                    <option value="">2XL</option>
                    <option value="">3XL</option>
                    <option value="">4XL</option>
                    </select>
                </div>

                <div className="product-color">
                    <label>Colour: <span className="color-name"></span></label>
                    <div className="product-img-colors">
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img1.jpg')"
                    >
                        <img src="Images/product-color-img1.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img2.jpg')"
                    >
                        <img src="Images/product-color-img2.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img3.jpg')"
                    >
                        <img src="Images/product-color-img3.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img4.jpg')"
                    >
                        <img src="Images/product-color-img4.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img5.jpg')"
                    >
                        <img src="Images/product-color-img5.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img6.jpg')"
                    >
                        <img src="Images/product-color-img6.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img7.jpg')"
                    >
                        <img src="Images/product-color-img7.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img8.jpg')"
                    >
                        <img src="Images/product-color-img8.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img9.jpg')"
                    >
                        <img src="Images/product-color-img9.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img10.jpg')"
                    >
                        <img src="Images/product-color-img10.jpg" alt="" />
                    </div>
                    <div
                        className="product-img"
                        onmouseover="changeImageColor('Images/product-color-img11.jpg')"
                    >
                        <img src="Images/product-color-img11.jpg" alt="" />
                    </div>
                    </div>
                    <a href="#">Size Chart</a>
                </div>
                </div>

                {/* Product Details Content */}
                <div className="product-details-content">
                <h3>Product details</h3>
                <table>
                    <tr>
                    <th>Material composition</th>
                    <td>Cotton</td>
                    </tr>
                    <tr>
                    <th>Pattern</th>
                    <td>Checkered</td>
                    </tr>
                    <tr>
                    <th>Fit type</th>
                    <td>Slim Fit</td>
                    </tr>
                    <tr>
                    <th>Sleeve type</th>
                    <td>Long Sleeve</td>
                    </tr>
                    <tr>
                    <th>Collar style</th>
                    <td>Polo Collar</td>
                    </tr>
                    <tr>
                    <th>Length</th>
                    <td>Standard Length</td>
                    </tr>
                    <tr>
                    <th>Country of Origin</th>
                    <td>India</td>
                    </tr>
                </table>
                </div>

                {/* About This Item */}
                <div className="about-this-item">
                <div className="see-more" onclick="seeMoreFucntion();">
                    <i className="fa-solid fa-angle-down"></i>
                    <a>See more</a>
                </div>

                <div className="about-this-item-top">
                    <h3>About this item</h3>
                    <ul>
                    <li>
                        Fabric - Premium Cotton, Pre-Washed for extremely soft
                        finish and No Shrinkage Post Washing
                    </li>
                    <li>
                        Truly comfortable and easy to wear in every season it is
                        insulating in winter and breathable in summer.Refresh your
                        wardrobe with this Shirt.
                    </li>
                    <li>
                        Style - Enhance your look by wearing this Casual Stylish
                        Men's shirt, Team it with a pair of tapered denims Or Solid
                        Chinos and Loafers for a fun Smart Casual look,Refresh your
                        wardrobe with this Shirt.
                    </li>
                    <li>
                        Comfortable to Wear and Easy to Maintain.Style note: Stylish
                        and trending full sleeve casual checkered shirt for casual &
                        smart casual wear
                    </li>
                    <li>
                        This shirt has been designed keeping in mind the latest
                        trends in a casual fashion or occassional fashion.
                    </li>
                    </ul>
                </div>

                <div className="about-this-item-bottom">
                    <h3>Additional Information</h3>
                    <table>
                    <tr>
                        <th>Manufacturer</th>
                        <td>Polestar Etail</td>
                    </tr>
                    <tr>
                        <th>Item Weight</th>
                        <td>230 g</td>
                    </tr>
                    <tr>
                        <th>Item Dimensions LxWxH</th>
                        <td>25 x 22 x 2 Centimeters</td>
                    </tr>
                    <tr>
                        <th>Generic Name</th>
                        <td>Shirt</td>
                    </tr>
                    </table>

                    <div className="see-less" onclick="seeLessFucntion();">
                    <i className="fa-solid fa-angle-up"></i>
                    <a>See less</a>
                    </div>
                </div>
                </div>

                {/* Quantity Offer */}
                <div className="quantity-offer">
                <h3>
                    The maximum order quantity for this product is limited to 5
                    units per customer
                </h3>
                <div className="quantity-offer-image">
                    <img src="Images/quantity-img.png" alt="" />
                    <p>
                    Please note that orders which exceed the quantity limit will
                    be auto-canceled. This is applicable across sellers.
                    </p>
                </div>
                </div>
            </div>

            {/* Product Details Right */}
            <div className="product-details-right">
                <h3 className="product-price"><sup>₹</sup>458<sup>00</sup></h3>

                <p className="product-delivery-time">
                <a href="#">FREE delivery</a> <b>Monday, 5 February</b> on orders
                dispatched by Amazon over ₹499. <a href="#">Details</a>
                </p>

                <p className="delivery-time-offer">
                Or fastest delivery <b>Today</b>. Order within
                <span>9 hrs 1 min</span>. <a href="#">Details</a>
                </p>

                <div className="delivery-address">
                <i className="fa-solid fa-location-dot"></i>
                <a href="#">Delivering to Delhi 110002 - Update location</a>
                </div>

                <div className="product-stock">
                <h4>In stock</h4>
                <table>
                    <tr>
                    <td>Ships From</td>
                    <td>Amazon</td>
                    </tr>

                    <tr>
                    <td>Sold by</td>
                    <td><a href="#">Polestar Etail</a></td>
                    </tr>
                </table>
                <div className="stock-quantity">
                    <label>Quantity:</label>
                    <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    </select>
                </div>
                </div>

                <div className="buy-cart-button">
                <button>Add to Cart</button>
                <button>Buy Now</button>
                </div>

                <div className="secure-transaction">
                <i className="fa-solid fa-lock"></i>
                <a href="#">Secure transaction</a>
                </div>

                <div className="add-to-gift">
                <input type="checkbox" />
                <p>Add gift options</p>
                </div>

                <div className="add-to-wishlist">
                <button>Add to Wish List</button>
                </div>
            </div>
            </div>
        </div>

        {/* Product Review Section */}
        <div className="product-review-section">
            {/* Product Review Left */}
            <div className="product-review-left">
            <div className="product-review-head">
                <img src="Images/top-brand.png" alt="" />
                <h3>Majestic Man</h3>
            </div>

            <div className="product-rating-count-box">
                <div className="product-rating-count">
                <img src="Images/correct-sign.png" alt="" />
                <p>84% positive ratings from 10K+ customers</p>
                </div>

                <div className="product-rating-count">
                <img src="Images/correct-sign.png" alt="" />
                <p>50K+ recent orders from this brand</p>
                </div>
            </div>
            </div>

            {/* Product Review Right */}
            <div className="product-review-right">
            <p>Highly rated by customers for</p>
            <div className="rated-tags">
                <div className="rated-tag">
                <img src="Images/rated-thumb.png" alt="" />
                <p>value for money</p>
                </div>
                <div className="rated-tag">
                <img src="Images/rated-thumb.png" alt="" />
                <p>good color</p>
                </div>
                <div className="rated-tag">
                <img src="Images/rated-thumb.png" alt="" />
                <p>good cloth</p>
                </div>
            </div>
            </div>
        </div>

        {/* Product Details Section */}
        <div className="product-details-section">
            <h2>Product details</h2>
            <div className="details">
            <p>Product Dimensions : <span>25 x 22 x 2 cm; 230 Grams</span></p>
            <p>Date First Available : <span>13 December 2022</span></p>
            <p>Manufacturer : <span>Polestar Etail</span></p>
            <p>ASIN : <span>B0BPXL79KX</span></p>
            <p>Item model number : <span>ST383GREY-M</span></p>
            <p>Country of Origin : <span>India</span></p>
            <p>Department : <span>Men</span></p>
            <p>Manufacturer : <span>Polestar Etail</span></p>
            <p>Item Weight : <span>230 g</span></p>
            <p>Item Dimensions LxWxH : <span>25 x 22 x 2 Centimeters</span></p>
            <p>Generic Name : <span>Shirt</span></p>
            <p>
                Best Sellers Rank :
                <span
                >#699 in Clothing & Accessories (<a href="#"
                    >See Top 100 in Clothing & Accessories</a
                >)</span
                >
            </p>

            {/* Product Rating Dropdown Section */}
            <div className="flex-div">
                <p>Customer Reviews:</p>
                <span className="product-rating-section">
                <p>3.8</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>
                <i className="fa-solid fa-chevron-down"></i>

                <div className="rating-dropdown2"></div>
                </span>

                <a href="#" className="rating-number-count">641 ratings</a>
            </div>
            </div>
        </div>

        {/* Product Description Section */}
        <div className="product-description-section">
            <h2>Product Description</h2>
            <div className="product-description-images">
            <img src="Images/description-img1.jpeg" alt="" />
            <img src="Images/description-img2.jpeg" alt="" />
            <h2>Majestic Man Checkered Slim fit Casual Shirt</h2>
            <p>
                Truly comfortable and easy to wear in every season it is insulating
                in winter and breathable in summer. Refresh your wardrobe with this
                Shirt.
            </p>
            <img src="Images/description-img3.jpeg" alt="" />
            <h2>
                Stylish and trending full-sleeve casual checkered shirt for casual &
                smart casual wear
            </h2>
            <p>
                This shirt has been designed to keep the latest trends in occasional
                casual fashion.
            </p>
            <img src="Images/description-img4.jpeg" alt="" />
            <h2>
                Style -
                <span
                >Enhance your look by wearing this Casual Stylish Men's shirt,
                Team it with a pair of tapered denim Or Solid Chinos and Loafers
                for a fun Smart Casual look, Refresh your wardrobe with this
                Shirt.</span
                >
            </h2>
            <h2>Care Instructions: <span>Machine Wash</span></h2>
            <h2>Fit Type: <span>Slim Fit</span></h2>
            <h2>
                Fabric -
                <span
                >Premium Cotton, Pre-Washed for an extremely soft finish and No
                Shrinkage Post Washing</span
                >
            </h2>
            <img src="Images/description-img5.jpeg" alt="" />
            </div>
        </div>

        {/* Info Search Section */}
        <div className="info-search-section">
            <h2>Looking for specific info?</h2>
            <div className="info-search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search in reviews, Q&A..." />
            </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="customer-review-section">
            {/* Customer Review Section Left */}
            <div className="customer-review-section-left">
            <h1>Customer reviews</h1>
            <div className="customer-review-box">
                <div className="stars-line">
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                </div>

                <p>3.8 out of 5</p>
                </div>

                <p className="rating-text-line">643 global ratings</p>

                <div className="review-filter-bar-section">
                <div className="review-filter">
                    <a href="#">5 star</a>
                    <div className="filter-box"></div>
                    <a href="#">45%</a>
                </div>
                <div className="review-filter">
                    <a href="#">4 star</a>
                    <div className="filter-box"></div>
                    <a href="#">25%</a>
                </div>
                <div className="review-filter">
                    <a href="#">3 star</a>
                    <div className="filter-box"></div>
                    <a href="#">10%</a>
                </div>
                <div className="review-filter">
                    <a href="#">2 star</a>
                    <div className="filter-box"></div>
                    <a href="#">6%</a>
                </div>
                <div className="review-filter">
                    <a href="#">1 star</a>
                    <div className="filter-box"></div>
                    <a href="#">14%</a>
                </div>

                <label
                    className="how-rating-calculated"
                    for="show-rating-text"
                    onclick="showRatingText()"
                >
                    <i className="fa-solid fa-angle-down"></i>
                    <p>How are ratings calculated?</p>
                </label>

                <input type="checkbox" id="show-rating-text" />

                <p className="rating-calculated-text">
                    To calculate the overall star rating and percentage breakdown by
                    star, we don’t use a simple average. Instead, our system
                    considers things like how recent a review is and if the reviewer
                    bought the item on Amazon. It also analyses reviews to verify
                    trustworthiness.
                </p>
                </div>

                <div className="review-this-product">
                <h1>Review this product</h1>

                <p>Share your thoughts with other customers</p>

                <button>Write a product review</button>
                </div>
            </div>
            </div>

            {/* Customer Review Section Right */}
            <div className="customer-review-section-right"></div>
        </div>
        </div>
        </>
    );
}

export default Productcomp;
