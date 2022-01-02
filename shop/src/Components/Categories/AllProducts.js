import React, { Component } from "react"
import ProductCard from "../productCard/ProductCard"
import CategoryName from "./CategoryName"
import '../Navbar/NavbarStyle.css'

class AllProducsts extends Component {


    render() {

        const { data, categoryName, productDetails, currency } = this.props

        const Product = data.categories.map((category, key) => {
            if (category.name === categoryName) {
                return (
                    <div className='products' key={key}>
                        {category.products.map((product) => {
                            return <ProductCard
                                currency={currency}
                                inStock={product.inStock}
                                productDetails={() => productDetails(product, product.id)}
                                key={product.id}
                                img={product.gallery[0]}
                                name={product.name}
                                price={product.prices}
                            />
                        }
                        )}
                    </div>
                )
            }
        })

        return (
            <div className='productList'>
                <div className='allProducts'>
                    <CategoryName name={categoryName} />
                    {Product}
                </div>
            </div>
        );
    }
}

export default AllProducsts;