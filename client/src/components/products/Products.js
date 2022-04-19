// import React from 'react'
// import "./products.scss"
// import Product from '../product/Product'
// import { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'


// function Products({ cat, filters, sort }) {

//   const [products, setProducts] = useState([])
//   const [filteredProducts, setFilteredProducts] = useState([])



//   //Fetching  products  from api get all products
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(cat
//           ? `http://localhost:5000/api/products?category=${cat}`
//           : "http://localhost:5000/api/products")
//         // console.log(res)
//         setProducts(res.data)

//       } catch (error) {

//       }
//     }
//     getProducts()
//   }, [cat])



//   //Filtering products
//   useEffect(() => {
//     cat && setFilteredProducts(
//       products.filter((item) =>
//         Object.entries(filters).every(([key, value]) =>
//           item[key].includes(value)

//         )
//       )
//     )
//   }, [products, cat, filters])



//   return (
//     <div className='productsCon'>{
//       filteredProducts.map((item) => (
//         <Product item={item} key={item.id} />))}
//     </div>
//   )
// }

// export default Products


import React from 'react'
import "./products.scss"
import Product from '../product/Product'


function Products() {
  return (
    <div className='productsCon'>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  )
}

export default Products