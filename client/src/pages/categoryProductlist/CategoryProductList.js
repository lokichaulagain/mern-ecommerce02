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

    //Taking category name from url and fetching data according to it
    const location = useLocation()
    console.log(location)
    const cat = location.pathname.split('/')[2];
    console.log(cat)






    //when we change any filters we gonna change values inside the object.at first it is empty object
    //Size and Color filter
    const [filters, setFilters] = useState({})//empty object
    const handleFilters = (e) => {
        const value = e.target.value  //taking value from filter options
        setFilters({
            ...filters,      //to keep all the filters in same object
            [e.target.name]: value
        })
    }
    console.log(filters);












    //SORT FILTERS
    const [sort, setSort] = useState("newest")//newest at the beginning always 
    const handleSorts = (e) => {
        const value = e.target.value
        setSort({
            [e.target.value]: value
        })
    }
    console.log(sort)
    //NOW using all this value in products component












    return (
        // Filter section-------------------------------------------
        <div className='categoryProductListPageCon'>
            <div className="categoryProductListPageConWrapper">
                <Navbar />
                <Announcement />
                <span className='dresses'>Dresses</span>
                <div className="categoryProductListPageFilterCon">
                    <div className="filter1">
                        <span className="filterTxt">Filter Products:</span>

                        {/* Colors Filter */}
                        <select name="color" className='colorFilter' onChange={handleFilters} >
                            <option disabled>Colors</option>
                            <option>black</option>
                            <option>red</option>
                            <option>blue</option>
                            <option>green</option>
                            <option>yellow</option>
                        </select>

                        {/* Size Filters */}
                        <select name="size" className='sizeFilter' onChange={handleFilters}  >
                            <option disabled>Size</option>
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
                        <select className='sortFilter' onChange={handleSorts} >
                            <option value="newest">Newest</option>
                            <option value="asc">Price(asc)</option>
                            <option value="desc">Price(dec)</option>
                        </select>
                    </div>
                </div>





                {/* passing all above value in Products / products images haru-------- */}
                <Products cat={cat} filters={filters} sort={sort} />
                <NewsLetter />
                <Footer />
            </div>
        </div>
    )
}

export default CategoryProductList
































// import React from 'react'
// import Announcement from '../../components/announcement/Announcement'
// import Navbar from '../../components/navbar/Navbar'
// import "./categoryProductList.scss"
// import Products from '../../components/products/Products'
// import NewsLetter from '../../components/newsLetter/NewsLetter'
// import Footer from '../../components/footer/Footer'
// import { useLocation } from 'react-router-dom'
// import { useState } from 'react'


// function CategoryProductList() {
//     //useLocation Hook
//     const location = useLocation()
//     const cat = location.pathname.split("/")[2];

//     //Colors Filters
//     const [filters, setFilters] = useState({})//at beginning its an empty object
//     const handleFilters = (e) => {
//         const value = e.target.value;
//         setFilters({
//             ...filters,
//             [e.target.className]: value
//         })
//     }


//     //sort Filters
//     const [sort, setSort] = useState("newest")//at beginning its newest
//     const sortFilters = (e) => {
//         setSort(e.target.value)
//     }


//     return (
//         <div className='categoryProductListPageCon'>
//             <div className="categoryProductListPageConWrapper">
//                 <Navbar />
//                 <Announcement />
//                 <span className='dresses'>Dresses</span>
//                 <div className="categoryProductListPageFilterCon">
//                     <div className="filter1">
//                         <span className="filterTxt">Filter Products:</span>

//                         {/* Colors Filter */}
//                         <select className='colorFilter' onChange={handleFilters} >
//                             <option disabled>Colors</option>
//                             <option>Black</option>
//                             <option>Red</option>
//                             <option>Blue</option>
//                             <option>Green</option>
//                             <option>Yellow</option>
//                         </select>

//                         {/* Size Filters */}
//                         <select className='sizeFilter' onChange={handleFilters} >
//                             <option disabled>Size</option>
//                             <option>XS</option>
//                             <option>S</option>
//                             <option>M</option>
//                             <option>L</option>
//                             <option>XXL</option>
//                         </select>
//                     </div>

//                     {/* Sort Filters */}
//                     <div className="filter2">
//                         <span className="filterTxt">Sort Products:</span>
//                         <select className='sortFilter' onChange={sortFilters} >
//                             <option value="newest">Newest</option>
//                             <option value="asc">Price(asc)</option>
//                             <option value="desc">Price(dec)</option>
//                         </select>
//                     </div>

//                 </div>
//                 <Products cat={cat} filters={filters} sort={sort} />
//                 <NewsLetter />
//                 <Footer />
//             </div>
//         </div>
//     )
// }
// export default CategoryProductList