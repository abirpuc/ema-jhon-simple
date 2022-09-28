import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name,img,ratings,seller,price} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                    <p style={{marginBottom: '11px'}}>{name}</p>
                    <p>price:${price}</p>
            
                    <p>Manufacturer: {seller}</p>
                    <p style={{marginBottom: '60px'}}>Rating: {ratings} star</p>
            </div>
            <button onClick={() => props.handleaddtocard(props.product)} className='btn-cart'>
                <div className="button">
                    <p style={{marginRight: '5px'}}>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </div>
            </button>
        </div>
    );
};

export default Product;