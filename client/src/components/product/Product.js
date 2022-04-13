import React from 'react'
import "./product.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function Product({ item }) {
  return (
    <div className='productCon'>
      <img className='productImg' src={item.img} alt="" />

      {/* <div className="threeIconCon"> */}
      {/* <div className= {item.threeIconCon}> */}
      <div className= {`threeIconCombo ${item.threeIconCon}`}>
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