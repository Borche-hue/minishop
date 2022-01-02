import React, { Component } from 'react';
import Buttons from '../buttons/Buttons';
import CheckCurrency from '../CheckCurrency';
import '../productCard/productStyle.css'

class ProductCard extends Component {
    constructor() {
        super()

        this.state = ({
            isHovered: false
        })
    }

    render() {

        const { productDetails, currency } = this.props
        const { isHovered } = this.state


        const buttonShow = () => {
            this.setState({ isHovered: true })
        }

        const hideButton = () => {
            this.setState({ isHovered: false })
        }
        return (
            <div className='product' onMouseLeave={() => hideButton()} onMouseEnter={() => buttonShow()} onClick={() => productDetails()}>
                {(this.props.inStock) ?
                    <img className='productImage' src={this.props.img} alt='product' />
                    : <div className='outOfStock'>
                        <p className='outOfStockText'>Out of Stock</p>
                        <img className='notInStock' src={this.props.img} alt='product' />
                    </div>}

                <p className='productName'>{this.props.name}</p>
                
                <CheckCurrency price={this.props.price} currency={currency}  class='price'/>

                <Buttons
                    class={(isHovered) ? 'addProduct' : 'hideButton'}
                    name={
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                        </svg>
                    }
                />
            </div>
        );
    }
}

export default ProductCard;