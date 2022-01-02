import React, { Component } from 'react';
import ChangeValute from '../Changevalute/ChangeValute';
import Minicart from '../Navbar/cartCard/Minicart';

class RightItems extends Component {
    render() {

        const { removeProduct, count, currency, fullItemInCart, goToCart, attributeInCart, productInCart, changeCurrency, data } = this.props

        return (
            <div className='rightItems'>
                <Minicart
                    removeProduct={removeProduct}
                    count={count}
                    productInCart={productInCart}
                    attributeInCart={attributeInCart}
                    currency={currency}
                    fullItemInCart={fullItemInCart}
                    goToCart={goToCart} />
                <ChangeValute
                    changeCurrency={changeCurrency}
                    data={data} />
            </div>
        );
    }
}

export default RightItems;