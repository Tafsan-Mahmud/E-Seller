import React from 'react'
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import './Product.css';
const Product = () => {
    const { products } = useSelector(state => state.ProductsReducer);
    return (
        <div>
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div className="col-3" key={product.id}>
                            <div className="product">
                                <div className="product__img">
                                   <img src={`/images/${product.image}`} alt="image name" />
                                </div>
                                <div className="product__name">
                                    {product.name}
                                    
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="product__price">
                                            <span className="actualPrice">{currencyFormatter.format(product.price, { code: 'USD' })}</span> <span className="discount">{product.discount}%</span>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="product__discount__price">
                                            {currencyFormatter.format(product.discountPrice, { code: 'USD' })}
                                        </div>
                                    </div>
                                    <Link to={`/details/${product.id}`}><button className="cstm-btn-pd">Buy Now..</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product;
