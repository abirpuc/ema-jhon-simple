import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data =>
            setProducts(data))
    } ,[]);

    useEffect( () => {
        const storedCard = getStoredCard()
        const saveCard = []
        for(let id in storedCard){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity = storedCard[id];
                addedProduct.quantity= quantity;
                saveCard.push(addedProduct)
                console.log(addedProduct)
            }
        }
        setCart(saveCard)
    },[products])
    const handleAddToCard = (selectedProduct) => {
        let newCart = [];
        let exist = cart.find(product => product.id === selectedProduct.id);
        if(!exist){
            selectedProduct.quantity = 1 ;
            newCart = [...cart,selectedProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        
        setCart(newCart)
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-body'>
            <div className="product-container">
              {
                products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    handleaddtocard = {handleAddToCard}
                ></Product>)
              }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;