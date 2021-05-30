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
            <div style={{height:'120vh'}} className="container d-flex justify-content-center pb-5 pt-5">
                <div className="reg-div w-50">
                    <h1>Checkout</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6>Your Name</h6>
                        <input className="form-control" defaultValue="" ref={register} name="name" placeholder="Your Name" required/>

                        <h6>Your Email</h6>
                        <input className="form-control" defaultValue="" ref={register} name="email" placeholder="Your Email" required/>

                        <h6>Your Phone Number</h6>
                        <input className="form-control" defaultValue="" ref={register} name="phnNumber" placeholder="Your Phone Number" required/>

                        <h6>Your Current Address </h6>
                        <input className="form-control" defaultValue="" ref={register} name="address" placeholder="Your Current Address" required/>

                        <h6>Total Price</h6>
                        <input className="form-control" defaultValue="" ref={register} name="totalPrice" placeholder="Total-Price" required/>

                        <h6>Quantities</h6>
                        <input className="form-control" defaultValue="" ref={register} name="quantities" placeholder="Quantities" required/>
                        <div className="payment-section">
                        <Payment></Payment>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
