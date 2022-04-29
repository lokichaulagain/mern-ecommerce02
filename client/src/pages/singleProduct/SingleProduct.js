import React from 'react'
import "./singleProduct.scss"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsLetter/NewsLetter"
import Footer from '../../components/footer/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { publicRequest } from '../../requestMethod'









function SingleProduct() {




    //In single product page we will fetch the data according to the url id of the particular product
    const location = useLocation()
    console.log(location)
    const id = location.pathname.split('/')[2];
    console.log(id)



    //Fetching that particular product and its details using that id
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("products/find/" + id)
                console.log(res.data)
                setProduct(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getProduct()
    }, [id])
    //lets use this data to display the product details









    return (
        <div className="singleProductCon">
            <Navbar />
            <Announcement />

            <div className="singleProductConWrapper">
                <div className="singleProductImgCon">
                    <img className='singleProductImg' src={product.productImg} alt="" />
                </div>2
                <div className="singleProductInfoCon">
                    <span className="singleProductInfoName">{product.title || "Dummy Title"}</span>
                    <span className="singleProductInfoSubTitle">{product.desc || "dummy description"}</span>

                    <span className="singleProductPrice">{"$ "+product.price || "$55 dummy "}</span>

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
                            <option defaultValue>Size</option>
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