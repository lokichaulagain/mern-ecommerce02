import React from 'react'
import "./products.scss"
import { popularProducts } from '../../data'
import Product from '../product/Product'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'


function Products({ cat, filters, sort }) {//taking props from(categoryProductList)
  //Fetching data
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products")
        console.log(res)

      } catch (error) {

      }
    }
    getProducts()
  }, [cat])


  return (
    <div className='productsCon'>{
      popularProducts.map((item) => (
        <Product item={item} key={item.id} />))}
    </div>
  )
}

export default Products