import React from 'react'
import "./singleProduct.scss"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsLetter/NewsLetter"
import Footer from '../../components/footer/Footer'

function SingleProduct() {
    return (
        <div className="singleProductCon">
            <Announcement />
            <Navbar />
            <Newsletter />
            <Footer/>

        </div>
    )
}

export default SingleProduct