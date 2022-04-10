import React from 'react'
import "./singleProduct.scss"
import Announcement from "../../components/announcement/Announcement"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsLetter/NewsLetter"

function SingleProduct() {
    return (
        <div className="singleProductCon">
            <Announcement />
            <Navbar />
            <Newsletter />

        </div>
    )
}

export default SingleProduct