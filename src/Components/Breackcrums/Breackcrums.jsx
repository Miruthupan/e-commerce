import React from 'react'
import './Breackcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breackcrums = (props) => {
    const{product}=props;

  return (
    <div className='breackcrums'>
      HOME <img src={arrow_icon} alt=""/> <img src={arrow_icon} alt=''/>{product.category}<img src={arrow_icon} alt=''/>{product.name}
    </div>
  )
}

export default Breackcrums
