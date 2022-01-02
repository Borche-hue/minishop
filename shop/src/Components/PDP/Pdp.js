import React, { Component } from 'react';
import Gallery from './Gallery';
import '../PDP/pdpStyle.css'
import FullDetails from './FullDetails';

class Pdp extends Component {
    constructor(props) {
        super(props);
        
        this.state = ({
            currentImg: this.props.product.gallery[0]
        })
    }
    
    render() {

        const { product, addToCart, currency, selectAtribute, isSelected, seletctedAttribute, value } = this.props

        const chagemDefaultImg = (image) => {
            this.setState({currentImg: image})
        }

        return (
            <div className='productDetails'>

                <Gallery chagemDefaultImg={chagemDefaultImg} product={product} />

                <div>
                    <img className='defaultImg' src={this.state.currentImg} alt='product' />
                </div>

                <FullDetails value={value} seletctedAttribute={seletctedAttribute} selectAtribute={selectAtribute} isSelected={isSelected} currency={currency} addToCart={addToCart} product={product} />

            </div>
        );
    }
}

export default Pdp;