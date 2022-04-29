import React from 'react'
import "./product.scss"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom'








function Product({ item }) {
  return (
    <div className='productCon'>
      <img className='productImg' src={item.image || "/assets/1.jpeg"} alt="" />

      <div className="threeIconCombo" >
        <div className="threeIcon">
          <ShoppingCartOutlinedIcon />
        </div>







        <div className="threeIcon">
          {/* =============================================================================== */}
          {/* go to single product page */}
          {/* yo id ko url bata aaba hami single post page ma data fetch garxau */}
          <Link to={`/product/${item._id}`} className="link">
            <SearchOutlinedIcon />
          </Link>
          {/* =============================================================================== */}
        </div>









        <div className="threeIcon">
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  )
}

export default Product