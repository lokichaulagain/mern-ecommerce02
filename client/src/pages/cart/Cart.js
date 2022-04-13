import React from 'react'
import "./cart.scss"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import NewsLetter from "../../components/newsLetter/NewsLetter"
import CartProduct from '../../components/cartProduct/CartProduct'
import CartSummary from '../../components/cartSummary/CartSummary'


function Cart() {
    return (
        <div className="cartCon">
            <Announcement />
            <Navbar />
            <div className="cartWrapper">
                <span className="cartTitle">YOUR BAG  </span>
                <div className="cartTopRow">
                    <button className=" continueShoppingBut">CONTINUE SHOPPING</button>

                    <div className="middleTextCon">
                        <span className='middleTxtFirst'>Shopping Bag (2)</span>
                        <span className='middleTxtSecond'  >Your Wishlist(0)</span>
                    </div>
                    <button className="checkOutBut">CHECKOUT NOW</button>
                </div>

                <div className="cartInfoRow">
                    <div className="cartLeftSide">
                        <CartProduct />
                        
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                        <CartProduct />
                    </div>
                    <div className="cartRightSide">
                        <CartSummary />
                    </div>


                </div>
            </div>
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default Cart