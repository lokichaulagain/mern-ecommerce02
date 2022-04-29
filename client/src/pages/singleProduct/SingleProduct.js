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
    console.log(product);
    //lets use this data to display the product details








    //Color and size filter===========================================================================>
    const [filters, setFilters] = useState({})//empty object
    const handleFilters = (e) => {
        const value = e.target.value  //taking value from filter options
        setFilters({
            ...filters,      //to keep all the filters in same object
            [e.target.name]: value
        })
    }
    console.log(filters);
    //================================================================================================>











    return (
        <div className="singleProductCon">
            <Navbar />
            <Announcement />

            <div className="singleProductConWrapper">
                <div className="singleProductImgCon">
                    <img className='singleProductImg' src={product.productImg} alt="" />
                </div>
                <div className="singleProductInfoCon">
                    <span className="singleProductInfoName">{product.title || "Dummy Title"}</span>
                    <span className="singleProductInfoSubTitle">{product.desc || "dummy description"}</span>

                    <span className="singleProductPrice">{"$ " + product.price || "$55 dummy "}</span>







                    {/* Colors Filter ==========================================================*/}
                    <select name="color"  className='SingleProductPageColorFilter' onChange={handleFilters} >
                        <option >Color</option>
                        {product.color?.map((data) => (
                            <option>{data}</option>
                        ))}
                    </select>
                    {/* ======================================================================= */}












                    {/* Size filter ===================================================================*/}
                    <div className="sizeChooseRow">
                        <span className="singleProductPageSelectSizeTxt">Size:</span>
                        <option >Size</option>
                        <select className='SingleProductPagesizeFilter' name="size"  onChange={handleFilters} >
                            <option >Size</option>
                            {product.size?.map((s) => (
                                <option >{s}</option>
                            ))}
                        </select>
                    </div>
                    {/* ================================================================================ */}










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