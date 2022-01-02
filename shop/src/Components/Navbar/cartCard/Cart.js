import React, { Component } from 'react';
import Buttons from '../../buttons/Buttons';
import ItemInCartCard from './ItemInCartCard';


class Cart extends Component {

    render() {

        const { removeProduct, count, productInCart, goToCart, attributeInCart, fullItemInCart, currency } = this.props

        return (
            <div className={this.props.class}>
                <div className='itemsInCart'>
                    <div className='itemCount'>
                        <p>My bag, {count} items</p>
                    </div>

                    <ItemInCartCard
                        removeProduct={removeProduct}
                        currency={currency}
                        fullItemInCart={fullItemInCart}
                        attributeInCart={attributeInCart}
                        productInCart={productInCart}

                    />


                    <div className='totalDiv'>
                        <label className='total'>Total:</label>
                        <label className='totalPrice'>50$</label>
                    </div>

                    <div className='buttons'>
                        <Buttons
                            onClick={() => goToCart()}
                            class='btn-viewBag'
                            name='View Bag'
                        />

                        <Buttons
                            class='btn-checkout'
                            name='CHECKOUT'

                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;