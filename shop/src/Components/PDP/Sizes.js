import React, { Component } from 'react';
import Buttons from '../buttons/Buttons';
import '../PDP/pdpStyle.css'

class Sizes extends Component {
    render() {

        const { items, disabled, selectAtribute, value, seletctedAttribute } = this.props

        return (
            <div className='sizeSelection'>
                {(items) ? items.map((attribute, key) => {
                    if (attribute.type === 'swatch') {
                        return (
                            <div key={key} className='sizeSelector'>
                                <p className='size'>{attribute.name}:</p>
                                {attribute.items.map((item, key) => {
                                    
                                    return <Buttons
                                        onClick={() => selectAtribute(item, attribute, attribute.id, item.value)}
                                        disabled={disabled}
                                        style={item.value}
                                        key={key}
                                        class={(item.value === value) ? 'swatchSelected' : this.props.class}
                                    />
                                })}
                            </div>)
                    } else {
                        return (<div key={key} className='sizeSelector'>
                            <p className='size'>{attribute.name}: </p>
                            <div className='attributeBtn'>
                                {attribute.items.map((item, key) => {

                                    //cuttent optin for rendering

                                    const currentOption = item

                                    //get selected options from state
                                    const selectedOptions = seletctedAttribute

                                    //let is not constant and we can change value
                                    let selected = false;

                                    //foreach of the selected items check if we have current option selected
                                    //if the _current option is in selectedOptionsList in the state
                                    //set _selected to true
                                    selectedOptions.forEach((itemInOption) => {
                                        if (itemInOption.id === attribute.id && itemInOption.item === currentOption) {
                                            selected = true
                                        }
                                    });

                                    return <Buttons
                                        onClick={() => selectAtribute(item, attribute, attribute.id, item.value)}
                                        disabled={disabled}
                                        name={item.value}
                                        key={key}
                                        class={selected ? `${this.props.class} selected` : `${this.props.class}`}
                                    />
                                })}
                            </div>

                        </div>)
                    }
                }) : ('')}
            </div>
        );
    }
}

export default Sizes;