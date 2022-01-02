import React, { Component } from 'react';
import Buttons from '../buttons/Buttons';
import CheckCurrency from '../CheckCurrency';
import Sizes from './Sizes';
import '../PDP/pdpStyle.css'

class FullDetails extends Component {
    render() {

        const { product, addToCart, currency, selectAtribute, isSelected, seletctedAttribute, value } = this.props


        return (
            <div>
                <section className='fullDetails'>

                    <p className='brand'>{product.brand}</p>
                    <p className='name'>{product.name}</p>

                    <Sizes
                        seletctedAttribute={seletctedAttribute}
                        value={value}
                        isSelected={isSelected}
                        selectAtribute={selectAtribute}
                        disabled={(product.inStock) ? false : true}
                        key={product.id}
                        class='sizeSelectionBtn'
                        items={product.attributes} 
                        />

                    <p className='pricePar'>Price:</p>

                    <CheckCurrency price={product.prices} currency={currency} class='price' />

                    <Buttons
                        disabled={(product.inStock) ? false : true}
                        onClick={() => addToCart(product, seletctedAttribute)}
                        class='addtocart'
                        name='ADD TO CART'
                    />

                    <div
                        className='description'
                        dangerouslySetInnerHTML={{ __html: `${product.description}` }}>
                    </div>
                </section>
            </div>
        );
    }
}

export default FullDetails;