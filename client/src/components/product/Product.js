import React from 'react'
import "./product.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function Product({ item }) {
  return (
    <div className='productCon'>
      <div className="productImgCon">
        <img className='productImg' src={item.img} alt="" />
      </div>
      <div className="threeIconCon">
        <div className="icon">
          <ShoppingCartOutlinedIcon />

        </div>

        <div className="icon">
          <SearchOutlinedIcon />

        </div>


        <div className="icon">
          <FavoriteBorderIcon />
        </div>





      </div>


    </div>
  )
}

export default Product