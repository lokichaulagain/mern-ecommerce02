import React from 'react'
import "./singleProduct.scss"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsLetter/NewsLetter"
import Footer from '../../components/footer/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

function SingleProduct() {
    return (
        <div className="singleProductCon">
            <Navbar />
            <Announcement />

            <div className="singleProductConWrapper">
                <div className="singleProductImgCon">
                    <img className='singleProductImg' src="https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png" alt="" />
                </div>
                <div className="singleProductInfoCon">
                    <span className="singleProductInfoName">Denim Jumpsuit</span>
                    <span className="singleProductInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque assumenda et repellat ducimus necessitatibus magni, iste, nihil sit sequi debitis? Quos corporis sequi iusto architecto iste, velit blanditiis! Cumque.

                    </span>

                    <span className="singleProductPrice">$300</span>

                    <div className="colorAndSizeRow">
                        <span className="chooseColor">Color:</span>
                        <div className='circularColorChooseDisk red'></div>
                        <div className='circularColorChooseDisk blue'></div>
                        <div className='circularColorChooseDisk  black'></div>
                        <div className='circularColorChooseDisk grey'></div>
                        <div className='circularColorChooseDisk  green'></div>
                        <div className='circularColorChooseDisk orange'></div>
                    </div>

                    <div className="sizeChooseRow">
                        <span className="singleProductPageSelectSizeTxt">Size:</span>

                        <select className='SingleProductPagesizeFilter' id="">
                            <option disabled selected>Size</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XXL</option>
                        </select>

                    </div>


                    <div className="quantityIncDecAndCartRow">
                        <div className="quantityIncDec">
                            <RemoveIcon />
                            <div className="containerBetwnAddRemove">2</div>
                            <AddIcon />
                        </div>
                        <button className="singleProductPageCartButton">ADD TO CART</button>
                    </div>



                </div>

            </div>












            <Newsletter />
            <Footer />

        </div>
    )
}

export default SingleProduct