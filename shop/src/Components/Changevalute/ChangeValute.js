import React, { Component } from 'react';
import '../Changevalute/changeValuteStyle.css'

class ChangeValute extends Component {
   
    render() {
        const { data, changeCurrency } = this.props

        return (
            <div className='changeValute'>
                <select className='selectCurrency' onChange={e => changeCurrency(e.target.value)}>
                    {(data) ? data.currencies.map((currency, key) => {
                        return <option key={key}>{currency.label}</option>
                    }) : ('')}
                </select>

            </div>
        );
    }
}

export default ChangeValute;