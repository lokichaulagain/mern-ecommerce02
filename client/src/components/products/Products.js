import React from 'react'
import "./products.scss"
import Product from '../product/Product'
import { useState, useEffect } from 'react'
import axios from 'axios'










function Products({ cat, filters, sort }) {

  //To check what props we are getting from CategoryProductList
  // console.log(cat, filters, sort);







  //Everything is ready Lets fetch data
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  //whenever we change our filter we gonna update this filteredProducts and show yhe products

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `http://localhost:5000/api/products?category=${cat}`
          : "http://localhost:5000/api/products")
        // console.log(res);
        setProducts(res.data)
      } catch (error) {
      }
    }
    getProducts()
  }, [cat])//when category changes run this function




  

  //Getting only Filtered products on screen (filtering)
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);
  console.log(filteredProducts);





  


  return (
    <div className='productsCon'>
      {filteredProducts.map((item, key) => (
        <Product item={item} key={key} />))} {/* created item props here */}
    </div>
  )
}

export default Products