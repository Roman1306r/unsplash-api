import React from 'react'
import RandomImage from './RandomImage';

const ModalRandomImages = ({randomImages, getPhotosById}) => {





const imagesArray = Array.from(new Set(randomImages)).map(obj => <RandomImage getPhotosById={getPhotosById} {...obj} key={obj.id} />)

  return (
    <div className='randomImages container'>
        {imagesArray}
    </div>
  )
}

export default ModalRandomImages