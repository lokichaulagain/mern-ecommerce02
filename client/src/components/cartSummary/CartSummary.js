import React from 'react'
import "./cartSummary.scss"

function CartSummary() {
    return (
        <div className='cartOrderSummary'>
            <div className="orderSummaryCardBox">
                <span className='orderSummaryTitle'>ORDER SUMMARY</span>
                <div className="orderSummaryList">
                    <span className="orderSummaryItem">Subtotal</span>
                    <span className="orderSummaryItem">$80.0</span>
                </div>

                <div className="orderSummaryList">
                    <span className="orderSummaryItem">Shipping Charge</span>
                    <span className="orderSummaryItem">$15.0</span>
                </div>

                <div className="orderSummaryList">
                    <span className="orderSummaryItem">Discount</span>
                    <span className="orderSummaryItem">$11.0</span>
                </div>

                <div className="orderSummaryTotal">
                    <span >Total</span>
                    <span >$11.0</span>
                </div>
                <button className='orderSummaryCheckOutButton'>CHECKOUT NOW</button>

            </div>

        </div>
    )
}

export default CartSummary