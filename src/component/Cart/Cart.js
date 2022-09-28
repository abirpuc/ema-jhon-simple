import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // console.log(cart)
    let {cart} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(let product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping
        ;
    }
    let tax = parseFloat((total * 0.1).toFixed(2))
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3 style={{textAlign:'center'}}>Order Summary</h3>
            <p>Total Products: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: {shipping}</p>
            <p>Tax: {tax}</p>
            <h4>SubTotal: {grandTotal}</h4>
        </div>
    );
};

export default Cart;