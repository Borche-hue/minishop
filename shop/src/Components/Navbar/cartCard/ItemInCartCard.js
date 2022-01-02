import React, { Component } from 'react';
import Quantity from './Quantity';
import '../cartCard/cartCardStyle.css'
import Buttons from '../../buttons/Buttons';
import AttributeInCart from '../../Cart/AttributeInCart';
import CheckCurrency from '../../CheckCurrency';

class ItemInCartCard extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            products: this.props.fullItemInCart
        })
    }
    render() {

        const { products } = this.state
        const { currency, removeProduct } = this.props


        return (<>
            {(products) ?
                products.map((product) => {
                    return <>
                        {product.map((detail, key) => {
                            return <div key={key} className="item">
                                <div className='info'>
                                    <label>{detail.item.name}</label>
                                    <CheckCurrency price={detail.item.prices} class='priceInCart' currency={currency} />
                                    <AttributeInCart attributeInCart={detail.attributes} class='attributesInMiniCart' />
                                    <Buttons class='removeItem-btn' onClick={() => removeProduct(key)} name='Remove' />
                                </div>

                                <Quantity />

                                <div>
                                    <img src={detail.item.gallery[0]} alt='product' width='120px' height='120px' />
                                </div>
                            </div>
                        })}

                    </>
                })
                : ('')}

        </>

        );
    }
}

export default ItemInCartCard;