import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import './Checkout.css';
import { useForm } from "react-hook-form";
import Payment from '../Payment/Payment';

const Checkout = () => {
    const { products, totalQuantities, totalPrice } = useSelector(state => state.CartReducer);
    console.log(products, "Quantities", totalQuantities, 'price:', totalPrice)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data)
        if(data){
            alert("Congratulations Your Order successfully Placed")
        }
    };
    return (
        <div className="checkout-dgn">
            <div className="height-form container d-flex justify-content-center pb-5 pt-5">
                <div className="reg-div">
                    <h1>Checkout </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h6>Your Name</h6>
                        <input className="form-control" defaultValue="" ref={register} name="name" placeholder="Your Name" required/>

                        <h6>Your Email</h6>
                        <input className="form-control" defaultValue="" ref={register} name="email" placeholder="Your Email" required/>

                        <h6>Your Phone Number</h6>
                        <input className="form-control" defaultValue="" ref={register} name="phnNumber" placeholder="Your Phone Number" required/>

                        <h6>Your Current Address </h6>
                        <input className="form-control" defaultValue="" ref={register} name="address" placeholder="Your Current Address" required/>

                        <h6>Total Price $</h6>
                        <input className="form-control" defaultValue={totalPrice} ref={register} name="totalPrice" placeholder="Total-Price" required/>

                        <h6> Total Quantities </h6>
                        <input className="form-control" defaultValue={totalQuantities} ref={register} name="quantities" placeholder="Quantities" required/>
                        <div className="payment-section">
                        <Payment></Payment>
                        <button type="submit" class="w-100 mt-4 btn btn-danger">Pay${totalPrice}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
