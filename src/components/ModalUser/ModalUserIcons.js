import React from 'react'
import download from '../../assets/images/download.png'
import userImg from '../../assets/images/user.png'
import like from '../../assets/images/like.png'
import photos from '../../assets/images/photos.png'



const ModalUserIcons = ({user}) => {
  return (
    <div className='profile__body-center'> 
                    <div className='profile__body-item'>
                        <img width="50" height="50" src={download} alt="download" />
                        {user.downloads}
                    </div>
                    <div className='profile__body-item'>
                        <img width="50" height="50" src={userImg} alt="followers" />
                        {user.followers_count}
                    </div>
                    <div className='profile__body-item'>
                        <img width="50" height="50" src={like} alt="like" />
                        {user.total_likes}
                    </div>
                    <div className='profile__body-item'>
                        <img width="50" height="50" src={photos} alt="photos" />
                        {user.total_photos}
                    </div>
    </div>
  )
}

export default ModalUserIcons