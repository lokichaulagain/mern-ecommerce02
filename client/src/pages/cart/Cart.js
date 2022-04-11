import React from 'react'
import "./cart.scss"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


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
                    <div className="cartProductDetail">
                        <div className="cartProductImgCon">
                            <img className='cartImg' src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt="" />

                        </div>

                        <div className="cartProductDetailInfo">
                            <div className="cartProductDetailInfoColumn1">
                                <div className="cartProductNameCon">
                                    <span className="cartProductNameTitle">Product : </span>
                                    <span className="cartProductName">Nike AtlasJacket</span>
                                </div>
                                <div className="cartProductNameCon">
                                    <span className="cartProductNameTitle">ID : </span>
                                    <span className="cartProductId">72154802645236</span>
                                </div>
                                <div className="cartProductColorCon"></div>

                                <div className="cartProductNameCon">
                                    <span className="cartProductNameTitle">Size : </span>
                                    <span className="cartProductSize">XL</span>
                                </div>


                            </div>

                            <div className="cartProductDetailInfoColumn2">

                                <div className="cartAddRemoveCon">
                                    <AddIcon />
                                    <span className='cartSelectedProductNum'>3</span>
                                    <RemoveIcon />
                                </div>

                                <span className='cartProductPrice'>$ 50.0</span>

                            </div>
                        </div>

                    </div>

                    <div className="cartOrderSummary">
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

                </div>








                <div className="cartInfoRow">
                    <div className="cartProductDetail">
                        <div className="cartProductImgCon">
                            <img className='cartImg' src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt="" />

                        </div>

                        <div className="cartProductDetailInfo">
                            <div className="cartProductDetailInfoColumn1">
                                <div className="cartProductNameCon">
                                    <span className="cartProductNameTitle">Product : </span>
                                    <span className="cartProductName">Nike AtlasJacket</span>
                                </div>
                                <div className="cartProductNameCon">
                                    <span className="cartProductNameTitle">ID : </span>
                                    <span className="cartProductId">72154802645236</span>
                                </div>
                                <div className="cartProductColorCon"></div>

                                <div className="cartProductNameCon">
                                    <span className="cartProductNameTitle">Size : </span>
                                    <span className="cartProductSize">XL</span>
                                </div>


                            </div>

                            <div className="cartProductDetailInfoColumn2">

                                <div className="cartAddRemoveCon">
                                    <AddIcon />
                                    <span className='cartSelectedProductNum'>3</span>
                                    <RemoveIcon />
                                </div>

                                <span className='cartProductPrice'>$ 50.0</span>

                            </div>
                        </div>

                    </div>

                    <div className="cartOrderSummary">
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

                </div>




























            </div>















            <Footer />




        </div>
    )
}

export default Cart