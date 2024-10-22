import React, { useContext } from 'react';
import './WishlistItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const WishlistItems = () => {
  const { all_product, wishlistItems, removeFromWishlist, moveToCart,getTotalWishlistAmount } = useContext(ShopContext);

  return (
    <div className='wishlistitems'>
      <div className="wishlistitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Remove</p>
        <p>Move to Cart</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (wishlistItems[e.id]) {
          return (
            <div key={e.id}>
              <div className="wishlistitems-format wishlistitems-format-main">
                <img src={e.image} alt="" className='hearticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <img
                  className='wishlist-remove-icon'
                  src={remove_icon}
                  onClick={() => removeFromWishlist(e.id)}
                  alt="Remove"
                />
                {/* Add Move to Cart button */}
                <button
                  className='wishlist-move-to-cart-btn'
                  onClick={() => moveToCart(e.id)}
                >
                  Move to Cart
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="wishlistitems-down">
        <div className="wishlistitems-total">
            <h1>wishlist Totals</h1>
            <div>
                <div className="wishlistitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalWishlistAmount()}</p>
                </div>
                <hr />
                <div className="wishlistitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="wishlistitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalWishlistAmount()}</h3>
                </div>
            </div>
            {/* <button>PROCEED TO CHECKOUT</button> */}
        </div>
        {/* <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>Submit</button>
            </div>
        </div> */}
      </div>
    </div>
    
  );
};

export default WishlistItems;
