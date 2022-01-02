import React, { useState } from 'react'
import '../Navbar/NavbarStyle.css'
import AllProducsts from '../Categories/AllProducts'
import {
    Link,
    Routes,
    Route,
    useNavigate,
} from "react-router-dom";
import NavbarLogo from './NavbarLogo';
import Pdp from '../PDP/Pdp';
import SeeCart from '../Cart/SeeCart';
import RightItems from '../Right Items/RightItems';


function Navbar({ data }) {

    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const [productInCart, setProductInCart] = useState([])
    const [currency, setCurrency] = useState('USD')
    const [seletctedAttribute, setSeletctedAttribute] = useState([])
    const [isSelected, setIsSelected] = useState('')
    const [value, setValue] = useState('')
    const [attributeInCart, setAttributeInCart] = useState()
    const [fullItemInCart, setFullItemInCart] = useState([])
    const [count, setCount] = useState(0)

    const productDetails = (currentproduct, id) => {
        navigate(`/datails/${id}`)
        setProduct(currentproduct)
        setSeletctedAttribute([])
    }

    const addToCart = (currentProduct, currentProductAttribues) => {
        productInCart.push(currentProduct)
        setProductInCart(productInCart)
        setAttributeInCart(currentProductAttribues)
        setCount(count + 1)

        const fullItemObject = {
            item: currentProduct,
            attributes: currentProductAttribues
        }

        fullItemInCart.push([fullItemObject])
        setFullItemInCart(fullItemInCart)

    }

    const removeProduct = (id) => {
        fullItemInCart.filter((props, index) => {
            return index !== id
        })
        setFullItemInCart(fullItemInCart)
    }

    const goToCart = () => {
        navigate('/cart')
    }

    const changeCurrency = (currency) => {
        setCurrency(currency)

    }

    const selectAtribute = (item, attribute, type, value) => {
        const findItemInList = seletctedAttribute.find(attribute => {
            return attribute.id === type
        })

        const itemObject = {
            id: type,
            item: item
        }

        if (findItemInList !== undefined) {
            const indexOfItem = seletctedAttribute.indexOf(findItemInList)
            if (indexOfItem >= 0)
                seletctedAttribute[indexOfItem] = itemObject
        }
        else {
            seletctedAttribute.push(itemObject)
        }

        setSeletctedAttribute(seletctedAttribute)
        setIsSelected(itemObject)
        setValue(value)
    }

    return (

        <div className='container' >

            <div className='navbar'>
                <div className='links'>
                    <ul className='linkList'>
                        {data.categories.map((category, key) => {
                            return <Link key={key} to={`/${category.name}`} className='navbarLink'>{category.name}</Link>
                        })}
                    </ul>
                </div>

                <NavbarLogo />

                <RightItems
                    removeProduct={removeProduct}
                    count={count}
                    currency={currency}
                    fullItemInCart={fullItemInCart}
                    goToCart={goToCart}
                    attributeInCart={attributeInCart}
                    productInCart={productInCart}
                    changeCurrency={changeCurrency}
                    data={data}
                />

            </div>
            <Routes>
                {data.categories.map((category, key) => {
                    return <Route
                        key={key}
                        path={`/${category.name}`}
                        element={
                            <AllProducsts
                                currency={currency}
                                productDetails={productDetails}
                                data={data}
                                categoryName={category.name}

                            />
                        }
                    />
                })}
                <Route
                    path={`/datails/${product.id}`}
                    element={
                        <Pdp
                            value={value}
                            seletctedAttribute={seletctedAttribute}
                            selectAtribute={selectAtribute}
                            isSelected={isSelected}
                            currency={currency}
                            addToCart={addToCart}
                            product={product}
                        />
                    }
                />

                <Route
                    path={'/cart'}
                    element={
                        <SeeCart
                            currency={currency}
                            fullItemInCart={fullItemInCart}
                            productInCart={productInCart}

                        />
                    }
                />
            </Routes>
        </div>
    );
}


export default Navbar;