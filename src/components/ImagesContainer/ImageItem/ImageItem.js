import React from 'react'
import download from '../../../assets/images/download1.gif'

const ImageItem = (props) => {

  return (
    <div className={props.width > props.height ? 'image-item' : 'image-item height'}>
        <img onClick={() => props.getPhotosById(props.id)} className='image-item-link height' src={props.urls.regular} alt={props?.description || 'images'} />
        <div className='image-item-info'>
            <div className='left_column'>
                <div className='image-item-profile'><img width="30" height="30" src={props.user.profile_image.small} alt={props.user.username} /> <h3 onClick={() => props.getUserbyUserName(props.user.username)}>{props.user.name}</h3></div>
                <p>{props.likes} likes</p>
            </div>
            <a target="_blank" className='download' href={props.links.download}><img width="45" height="45" src={download} alt="download" /></a>
        </div>
    </div>
  )
}

export default ImageItem