import React, { Component } from 'react';
import '../PDP/pdpStyle.css'

class Gallery extends Component {
    render() {
        const { product, chagemDefaultImg } = this.props

        return  (
            <div className='allImages'>
                {(product) ? product.gallery.slice(0, 3).map((img, key) => {
                return <img onClick={() => chagemDefaultImg(img)} key={key} className='galleryImg' src={img} />
            }) : ('')}
            </div>
        )
    }
}

export default Gallery;