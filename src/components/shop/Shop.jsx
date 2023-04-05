import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';

import './Shop.css';
const Shop = () => {
    const [products,setProducts]=useState([])
    const [cart,setCart]=useState([])



    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setProducts(data))
    },[])

   useEffect (()=>{
    const storedCart =getShoppingCart()
    const savedCart=[]
    //  step 1: get id of the addedProduct
    for (const id in storedCart) {
    // step 2: get product from products state by using id
    const addedProduct =products.find(product => product.id === id)
    if (addedProduct) {
        // step 3: add quantity
        const quantity=storedCart[id]
        addedProduct.quantity=quantity
        // step 4: add the added product to the saved cart
        savedCart.push(addedProduct)
    }
    // console.log('addedProduct',addedProduct);
    }
    // step 5: set the cart
    setCart(savedCart)
   },[products])

    const handleAddToCart=(product)=>{
        let newCart=[]
        // if product doesn't exist in the cart, then set quantity =1
        // if exist update quantity by 1
        const exists=cart.find(pd=> pd.id === product.id)
        if(!exists){
            product.quantity=1
            newCart=[...cart,product]
        }
        else{
            exists.quantity=exists.quantity+1
            const remaining =cart.filter(pd=>pd.id !==product.id)
            newCart=[...remaining,exists]
        }
        setCart(newCart)
        addToDb(product.id)
    }

    return (
        <div className='shop-container flex '>
            <div className="products-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 w-7/12 md:w-4/5 2xl:w-3/4 m-8 gap-8 ">
               {
                products.map(product=> <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
               }
            </div>
            <div className="cart-container md:w-1/5 mt-3  w-5/12">
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;