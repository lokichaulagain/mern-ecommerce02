import React from 'react'
import "./home.scss"
import Announcement from '../../components/announcement/Announcement'
import Categories from '../../components/categories/Categories'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/products/Products'
import Slider from '../../components/slider/Slider'
import NewsLetter from '../../components/newsLetter/NewsLetter'
import Footer from '../../components/footer/Footer'



function Home() {
  return (
    <div className='homePageCon'>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}

export default Home