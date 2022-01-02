import React, { Component } from 'react';

class CheckCurrency extends Component {
    render() {

        const { price, currency } = this.props

        return (
            <>
                {price.map((price, key) => {
                    if (price.currency.label === currency) {
                        return <p className={this.props.class} key={key}>{price.amount} {price.currency.symbol}</p>
                    }
                    else return <></>
                })}
            </>
        );
    }
}

export default CheckCurrency;


