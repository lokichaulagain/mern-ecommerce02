import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import "./categoryProductList.scss"
import Products from '../../components/products/Products'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'


function CategoryProductList() {
    return (
        <div className='categoryProductListPageCon'>
            <div className="categoryProductListPageConWrapper">
                <Navbar />
                <Announcement />
                <span className='dresses'>Dresses</span>
                <div className="categoryProductListPageFilterCon">
                    <div className="filter1">
                        <span className="filterTxt">Filter Products:</span>
                        <select className='colorsFilter' id="">
                            <option className='filterOption' disabled selected>Colors</option>
                            <option value="">Black</option>
                            <option value="">Red</option>
                            <option value="">Blue</option>
                            <option value="">Green</option>
                            <option value="">Yellow</option>
                        </select>

                        <select className='sizeFilter' id="">
                            <option disabled selected>Size</option>
                            <option value="">XS</option>
                            <option value="">S</option>
                            <option value="">M</option>
                            <option value="">L</option>
                            <option value="">XXL</option>
                        </select>

                    </div>
                    <div className="filter2">
                        <span className="filterTxt">Filter Products:</span>
                        <select className='colorsFilter' id="">
                            <option disabled selected>Newest</option>
                            <option value="">Price (asc)</option>
                            <option value="">Price (dec)</option>
                            <option value="">Most Buy</option>
                            <option value="">Trending Now</option>
                            <option value="">Most Liked</option>
                        </select>
                    </div>
                </div>
                <Products />
                <NewsLetter />
                <Footer />

            </div>
        </div>
    )
}
export default CategoryProductList