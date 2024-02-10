
const cartcomp = () => {
  return (
    <>
    {/* Main */}
    <main>
      {/* Shopping Cart Container */}
      <div class="shopping-cart-container">
        {/* Shopping Cart Left */}
        <div class="shopping-cart-left">
          {/* Cart Header */}
          <div class="cart-header">
            <h1>Shopping Cart</h1>
            <p>Deselect all items</p>
            <span>Price</span>
          </div>

          {/* Cart Products */}
          <div class="cart-product">
            <div class="cart-product-img">
              <input type="checkbox" />
              <img src="cart-images/cart-product-img1.jpg" alt="" />
            </div>

            <div class="cart-product-details">
              <h3>
                TechMount� Voice Upgraded Lavalier Lapel Microphone,
                Omnidirectional Condenser Mic with 3.5mm Jack, Useful for
                YouTube, Interview, Studio, Video, Recording,Noise Cancelling
                Mic(black-60 Inch Long)
              </h3>
              <p class="in-stock">In stock</p>
              <p>Eligible for FREE Shipping</p>
              <img src="cart-images/amazon-tag.png" alt="" />
              <p>Sold by <a href="#">TASQ AND COMPANY</a></p>
              <p>
                Gift options not available.
                <a href="#">Learn more</a>
              </p>
              <div class="quantity-delete-buttons">
                <select>
                  <option>Qty: 1</option>
                  <option value="0">0(Delete)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10+</option>
                </select>

                <span>Delete</span>
                <span>Save for later</span>
                <span>See more like this</span>
                <a href="#">Share</a>
              </div>
            </div>

            <div class="cart-product-price">
              <span>₹</span>
              <h3>399.00</h3>
            </div>
          </div>

          <div class="cart-product">
            <div class="cart-product-img">
              <input type="checkbox" />
              <img src="cart-images/cart-product-img2.jpg" alt="" />
            </div>

            <div class="cart-product-details">
              <h3>
                SWAPKART Flexible Mobile Tabletop Stand, Metal Built -for Video,
                Heavy Duty Foldable Lazy Bracket Clip Mount, Multi Angle Clamp
                for All Smartphones (Pack of 1) Multi Colour
              </h3>
              <p class="in-stock">In stock</p>
              <p>Eligible for FREE Shipping</p>
              <img src="cart-images/amazon-tag.png" alt="" />
              <p>Sold by <a href="#">TASQ AND COMPANY</a></p>
              <p>
                Gift options not available.
                <a href="#">Learn more</a>
              </p>
              <div class="quantity-delete-buttons">
                <select>
                  <option>Qty: 1</option>
                  <option value="0">0(Delete)</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10+</option>
                </select>

                <span>Delete</span>
                <span>Save for later</span>
                <span>See more like this</span>
                <a href="#">Share</a>
              </div>
            </div>

            <div class="cart-product-price">
              <span>₹</span>
              <h3>251.00</h3>
            </div>
          </div>

          <div class="subtotal-items">
            <p>Subtotal (2 items): ₹<b>650.00</b></p>
          </div>
        </div>

        {/* Shopping Cart Right */}
        <div class="shopping-cart-right">
          <div class="eligible-free-delivery">
            <div class="exclamation-mark">i</div>
            <p>
              Add <span>₹248.00</span> of eligible items to your order to
              qualify for FREE Delivery. <a href="#">Details</a>
            </p>
          </div>
          <p>Subtotal (2 items): ₹<b>650.00</b></p>

          <button>Proceed to Buy</button>
        </div>
      </div>
    </main>
    </>
  );
}

export default cartcomp;
