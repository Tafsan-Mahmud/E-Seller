import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Checkout.css';
import { useForm } from "react-hook-form";
import Payment from '../Payment/Payment';

const Checkout = () => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
    console.log(products, "Quantities", totalQuantities, 'price:', totalPrice)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="checkout-dgn">
            
        </div>
    );
};

export default Checkout;