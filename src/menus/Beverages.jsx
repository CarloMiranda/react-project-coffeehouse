import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { message } from 'antd';

export const Beverages = (props) => {
    const { id, productName, productImage, price} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];

    const openMessage = () => {
        message.config({
          top: 60
        });
      
        message.open({
          key: id.toString(),
          type: 'loading',
          content: 'Loading...',
        });
        setTimeout(() => {
          message.open({
            key: id.toString(),
            type: 'success',
            content: 'Item Added!',
            duration: 2,
          });
        }, 800);
      };
      
    return(
    <section>
        <div className="">
            <button onClick={() => {addToCart(id);
                                    openMessage()}}
                className="add-item menu-item my-3 ms-5 col-md-2 text-start d-flex border rounded-4 shadow">
                    <span className="position-absolute badge rounded-pill bg-danger">
                        { cartItemAmount > 0 && <> {cartItemAmount}</>}
                    </span>
                <img src={productImage} alt="hot chocolate" className="img-fluid" />
                <div>
                    <p className="mb-5">{productName}</p>
                    <p className="price">Php {price}</p>
                </div>
            </button>
        </div>
    </section>    
    )
}

export default Beverages;