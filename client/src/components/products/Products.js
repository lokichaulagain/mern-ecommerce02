import React from 'react'
import "./products.scss"
//import popularProduct from data

import { popularProducts } from '../../data'
import Product from '../product/Product'

function Products() {
  return (
    <div className='productsCon'>{
      popularProducts.map(item => (
        <Product item={item} key={item.id} />))}

    </div>
  )
}

export default Products