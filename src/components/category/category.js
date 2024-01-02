import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = ({ category }) => {
    const {title, id, imageUrl} = category
    const navigate = useNavigate()
    const linkHandler = () => {
      navigate(`/shop/${title}`)
    }

  return (
    <div  onClick={linkHandler} key={id} className='category-container'>
        <div className='background-image' style={{backgroundImage: `url(${imageUrl})`}}/>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      )
}

export default Category