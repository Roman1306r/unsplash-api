import React from 'react'

const ModalImagesBody = ({findedPhoto}) => {
  return (
    <div className='modalimages__body-bgcontainer'>
        <img className='modalimages__body-bg' src={findedPhoto.urls.full} alt={findedPhoto.alt_description} />
    </div>
  )
}

export default ModalImagesBody