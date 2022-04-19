import React from 'react'
import "./cartProduct.scss"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function CartProduct() {
    return (
        <div className='cartSingleProduct'>
            <div className="cartSingleProductWrapper">
                <div className="cartProductDetail">
                    <div className="cartProductImgCon">
                        <img className='cartImg' src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" alt="" />
                    </div>

                    <div className="cartProductDetailInfo">
                        <div className="cartProductNameCon">
                            <span className="cartProductNameTitle">Product : </span>
                            <span className="cartProductName">Nike AtlasJacket</span>
                        </div>

                        <div className="cartProductNameCon">
                            <span className="cartProductNameTitle">ID : </span>
                            <span className="cartProductId">72154802645236</span>
                        </div>


                        <div className="cartProductNameCon">
                            <div className="cartProductColorCon"></div>
                        </div>


                        <div className="cartProductNameCon">
                            <span className="cartProductNameTitle">Size : </span>
                            <span className="cartProductSize">XL</span>
                        </div>


                        <div className="  cartProductNameCon cartPageAddRemoveCon">
                            <AddIcon />
                            <span className='cartSelectedProductNum'>3</span>
                            <RemoveIcon />
                        </div>
                        <span className='  cartProductNameCon cartProductPrice'>$ 50.0</span>
                    </div>
                </div>

            </div>

            <hr className="cartHrLine"/>
        </div>
    )
}

export default CartProduct