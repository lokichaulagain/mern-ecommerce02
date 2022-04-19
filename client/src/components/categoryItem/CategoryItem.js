import React from 'react'
import "./categoryItem.scss"
import { Link } from 'react-router-dom'


function CategoryItem({ item }) {
    return (
        <div className='categoryItemCon'>
            <div className="itemImgCon">
                <img className='itemImg' src={item.img} alt="" />
            </div>
            <div className="info">
                <span className="itemTitle">{item.title}</span>
                <Link to={`/products/${item.cat}`}>
                    <button className='itemButton'>SHOP NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default CategoryItem