import React, { Component } from 'react';
import Buttons from '../buttons/Buttons';
import '../Cart/CartStyle.css'

class AttributeInCart extends Component {

    render() {

        const { attributeInCart } = this.props

        return (
            <div className={this.props.class}>
                {attributeInCart.map((attribute, key) => {
                    if (attribute.id === 'Color') {
                        return <div key={key} className='attribute'>
                            <p className='attributeId'>{attribute.id}</p>
                            <Buttons disabled={true} style={attribute.item.value} class='attributesInCart-btn' />
                        </div>
                    } else {
                        return <div key={key} className='attribute'>
                            <p className='attributeId'>{attribute.id}</p>
                            <Buttons disabled={true} class='attributesInCart-btn selected' name={attribute.item.value} />
                        </div>
                    }
                })}

            </div>
        );
    }
}

export default AttributeInCart;