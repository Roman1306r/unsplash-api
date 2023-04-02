import React from 'react'



const StatsItem = ({image, data, title}) => {

  return (
    <div className='stats__item'>
        <div><img src={image} alt="stats" /></div>
        <div className='stats__item-body'>
            <h3>{data}</h3>
            <h4>{title}</h4>
        </div>
    </div>
  )
}

export default StatsItem