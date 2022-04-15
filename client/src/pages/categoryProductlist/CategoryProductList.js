import React from 'react'
import Announcement from '../../components/announcement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import "./categoryProductList.scss"
import Products from '../../components/products/Products'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'


function CategoryProductList() {
    // const location = useLocation()
    // console.log(location.pathname.split("/")[2])

    //to find location path and storing in cat variable
    const location = useLocation()
    const cat = location.pathname.split("/")[2];


    const [filters, setFilters] = useState({})//whenever we change color and size we will update this state
    const [sort, setSort] = useState("newest")
    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.className]: value
        })
    }


    const handleSorts = (e) => {
        setSort(e.target.value)
    }






    return (
        <div className='categoryProductListPageCon'>
            <div className="categoryProductListPageConWrapper">
                <Navbar />
                <Announcement />
                <span className='dresses'>Dresses</span>
                <div className="categoryProductListPageFilterCon">
                    <div className="filter1">
                        <span className="filterTxt">Filter Products:</span>

                        {/* Colors Filter */}
                        <select className='colorFilter' onChange={handleFilters}>
                            <option>Colors</option>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                            <option>Yellow</option>
                        </select>

                        {/* Size Filters */}
                        <select className='sizeFilter' onChange={handleFilters}>
                            <option>Size</option>
                            <option>XS</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XXL</option>
                        </select>
                    </div>

                    {/* Sort Filters */}
                    <div className="filter2">
                        <span className="filterTxt">Sort Products:</span>
                        <select className='sortFilter' onChange={handleSorts}>
                            <option value="newest">Newest</option>
                            <option value="asc">Price(asc)</option>
                            <option value="desc">Price(dec)</option>
                        </select>
                    </div>

                </div>
                <Products cat={cat} filters={filters} sort={sort} />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    )
}
export default CategoryProductList