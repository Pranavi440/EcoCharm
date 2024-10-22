import React, { useContext, useState } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import './CheckoutPage.css';
import remove_icon from '../Assets/cart_cross_icon.png';

const CheckoutPage = () => {
    const { all_product, cartItems, getTotalCartAmount } = useContext(ShopContext);
    const [isProcessing, setIsProcessing] = useState(false); // State for processing payment

    const handlePayment = async (e) => {
        e.preventDefault(); // Prevent default form submission
        setIsProcessing(true); // Set processing state

        // Simulating a payment API request
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert("Payment Successful! Thank you for your purchase.");
        } catch (error) {
            alert("Payment failed. Please try again.");
        } finally {
            setIsProcessing(false); // Reset processing state
        }
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>

            <div className='cartitems'>
                <div className="cartitems-format-main">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
                <hr />
                {all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt={e.name} className='carticon-product-icon' />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                    <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
                <div className="cartitems-total">
                    <h3>Total Price: ${getTotalCartAmount().toFixed(2)}</h3>
                </div>
            </div>

            <form onSubmit={handlePayment} className="checkout-form">
                <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9101 1121"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cardHolder">Cardholder Name</label>
                    <input
                        type="text"
                        id="cardHolder"
                        placeholder="John Doe"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="expiryDate">Expiration Date (MM/YY)</label>
                    <input
                        type="text"
                        id="expiryDate"
                        placeholder="MM/YY"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        required
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="billingAddress">Billing Address</label>
                    <input
                        type="text"
                        id="billingAddress"
                        placeholder="123 Main Street, Apt #456"
                        required
                        className="form-control"
                    />
                </div>
                <button
                    type="submit"
                    className="checkout-button"
                    disabled={isProcessing}
                >
                    {isProcessing ? 'Processing...' : 'Complete Payment'}
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
