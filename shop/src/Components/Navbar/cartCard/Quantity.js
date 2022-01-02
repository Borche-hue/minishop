import React, { Component } from 'react';
import Buttons from '../../buttons/Buttons';
import '../cartCard/cartCardStyle.css'

class Quantity extends Component {
    constructor(){
        super()

        this.state = ({
            count: 1
        })
    }


    render() {

        const { count } = this.state

        const increase = () => {
            this.setState({count: count + 1})
        }

        const decrease = () => {
            if(count > 1)
                this.setState({count: count - 1})
        }
    
        return (
            <div className='quantity'>
                <Buttons class='btn-quantity' name="+" onClick={increase} />
                <label> {this.state.count} </label>
                <Buttons class='btn-quantity' name="-" onClick={decrease}/>
            </div>
        );
    }
}

export default Quantity;