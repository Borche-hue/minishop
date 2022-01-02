import React, { Component } from 'react';
import '../Categories/containerStyle.css'

class CategoryName extends Component {
    render() {

        const {name} = this.props

        return (
            <div>
                <h1 className='categoryName'>{name}</h1>
            </div>
        );
    }
}

export default CategoryName;