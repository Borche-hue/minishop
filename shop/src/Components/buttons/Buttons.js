import React, { Component } from 'react';
import '../buttons/buttonsStyle.css'

const CLASSES = ['btn-primary','swatchSelected','attributesInCart-btn selected', 'sizeSelectionBtn selected' ,'selected' , 'removeItem-btn' ,'attributesInCart-btn','hideButton', 'addProduct' ,'btn-quantity' , 'sizeSelectionBtn','addtocart', 'btn-viewBag', 'btn-checkout']

class Buttons extends Component {
    render() {

        const checkClass = CLASSES.includes(this.props.class) ? this.props.class : CLASSES[0]; 


        return (
            <button 
            disabled={this.props.disabled}
            style={{backgroundColor: `${this.props.style}`}} 
            className={checkClass} 
            onClick={this.props.onClick}> 

            {this.props.name} 
            
            </button>
        )
    }
}

export default Buttons;