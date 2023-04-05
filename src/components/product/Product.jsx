import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Product = (props) => {
    const { id, category, name, seller, price, stock, ratings, ratingsCount, img, shipping, quantity } = props.product

    const handleAddToCart=props.handleAddToCart
  
    return (
        <div className=' w-full h-full  border-solid border-2 divide-black font-serif rounded-lg relative shadow-2xl'>
            <img className='w-screen md:h-72 mx-0 lg:w-full  xl:h-96 sm:h-64  p-4 rounded-lg' src={img} alt="" />
            <div className='product-info grid gap-1 mt-2 p-4 '>
                <h5 className='product-name font-normal leading-6 mt-0 mb-0 text-xl '>{name}</h5>
                <h6>Price: ${price}</h6>
                <p>Manufacture: {seller}</p>
                <p className='mb-3'>Rating: {ratings}</p>
            </div>
                <button onClick={()=>handleAddToCart(props.product )} title='Click to add to chart' className='w-full bg-yellow-200 border rounded-b-lg absolute bottom-0 h-7 hover:bg-orange-300 font-medium hover:font-sans '>Add to cart <FontAwesomeIcon icon={faShoppingCart} />
</button>
        </div>
    );
};

export default Product;