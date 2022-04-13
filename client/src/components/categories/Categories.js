import React from 'react'
import "./categories.scss"
import { categories } from '../../data'
import CategoryItem from '../category/CategoryItem'

function Categories() {
    return (
        <div className='categoriesCon'>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Categories