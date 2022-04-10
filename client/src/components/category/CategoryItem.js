import React from 'react'
import "./categoryItem.scss"

function CategoryItem({ item }) {
    return (
        <div className='categoryItemCon'>
            <div className="itemImgCon">
                <img  className='itemIng' src={item.img} alt="" />
            </div>
            <div className="info">
                <span className="itemTitle">{item.title}</span>
                <button className='itemButton'>SHOP NOW</button>

            </div>


        </div>
    )
}

export default CategoryItem