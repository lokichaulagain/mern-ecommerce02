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
            <Announcement />
            <Navbar />

            <div className="singleProductConWrapper">
                <div className="singleProductImgCon">Image</div>
                <div className="singleProductInfoCon">
                    <span className="singleProductInfoTitle">Denim Jumpsuit</span>
                    <span className="singleProductInfoSubTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam neque assumenda et repellat ducimus necessitatibus magni, iste, nihil sit sequi debitis? Quos corporis sequi iusto architecto iste, velit blanditiis! Cumque.

                    </span>

                    <span className="singleProductPrice">$300</span>

                    <div className="colorAndSizeRow">
                        <span className="chooseColor">Color</span>
                        <div className='circularColorChooseDisk red'></div>
                        <div className='circularColorChooseDisk blue'></div>
                        <div className='circularColorChooseDisk  black'></div>
                        <div className='circularColorChooseDisk grey'></div>
                        <div className='circularColorChooseDisk  green'></div>
                        <div className='circularColorChooseDisk orange'></div>
                    </div>

                    <div className="sizeChooseRow">
                        <span className="selectSize">Size</span>

                        <select className='selectSize'>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XL</option>
                            <option value="">XXL</option>
                            <option value="">XXXL</option>
                        </select>

                    </div>


                    <div className="quantityIncDecAndCartRow">
                        <div className="quantityIncDec">
                            <RemoveIcon/>
                            <AddIcon/>



                        </div>

                    </div>

                </div>

            </div>












            <Newsletter />
            <Footer />

        </div>
    )
}

export default SingleProduct