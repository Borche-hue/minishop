import React, { Component } from 'react';
import Buttons from '../buttons/Buttons';
import Quantity from '../Navbar/cartCard/Quantity';
import '../Cart/CartStyle.css'
import AttributeInCart from './AttributeInCart';
import CheckCurrency from '../CheckCurrency';

class ItemsCard extends Component {
    render() {

        const { fullItemInCart, currency } = this.props

        return (
            <div className='itemsInCart'>
                {(fullItemInCart) ?
                    fullItemInCart.map((product, key) => {
                        return <div key={key}>
                        {product.map((detail,key) => {
                            console.log(detail)
                            return <div key={key} className="itemInCart">
                                <div className='itemInfo'>
                                    <h1>{detail.item.name}</h1>
                                    <h1>{detail.item.prices[0].amount} {detail.item.prices[0].currency.symbol}</h1>
                                    <CheckCurrency price={detail.item.prices} class='priceInCart' currency={currency} />
                                    
                                    <AttributeInCart attributeInCart={detail.attributes} class='attributeInCart'/>
                                    <Buttons class='removeItem-btn' name='Remove' />
                                </div>

                                <div className='quantityAndImage'>
                                    <Quantity />
                                    <img src={detail.item.gallery[0]} alt='product' width='141px' height='185px' />
                                </div>
                            </div>
                        })}
                            
                        </div>
            
                    })
                    : ('')}

            </div>
        );
    }
}

export default ItemsCard;