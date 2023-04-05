import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // const { cart } = props // option1
    // console.log(cart);
    let totalShipping=0
    let totalPrice =0
    let quantity=0
    
    for(let product of cart){
        // product.quantity=product.quantity || 1
        totalPrice=totalPrice+product.price*product.quantity
        totalShipping=totalShipping+product.shipping
        quantity =quantity + product.quantity
        
    }
    const tax=totalPrice*7/100
    const grandTotal =totalPrice+totalShipping+tax
    return (
        <div className='cart sticky top-0 h-auto p-7 grid mt-5 bg-yellow-200 font-serif font-medium'>
            <h3>Oder's Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;