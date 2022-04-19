import React from 'react'
import "./product.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product() {
  return (
    <div className='productCon'>
      <img className='productImg' src="" alt="" />

      <div className="threeIconCombo" >
        <div className="threeIcon">
          <ShoppingCartOutlinedIcon />
        </div>

        <div className="threeIcon">
          <SearchOutlinedIcon />
        </div>

        <div className="threeIcon">
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  )
}

export default Product