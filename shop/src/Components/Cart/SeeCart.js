import React, { Component } from 'react';
import '../Cart/CartStyle.css'
import ItemsCard from './ItemsCard';


class SeeCart extends Component {
    render() {

        const { fullItemInCart, currency } = this.props

        return (
            <div className='fullCart'>
                <h1>Cart</h1>

                <ItemsCard currency={currency} fullItemInCart={fullItemInCart} />

            </div>
        );
    }
}

export default SeeCart;