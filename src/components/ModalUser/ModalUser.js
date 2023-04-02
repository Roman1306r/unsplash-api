import React from 'react'
import close from '../../assets/images/close.png'
import Loader from '../../common/Loader/Loader';
import ModalUserIcons from './ModalUserIcons';
import ModalUserProfile from './ModalUserProfile';
import ModalUserSocial from './ModalUserSocial';




const ModalUser = ({setUser, user, isLoad, setFindedPhoto, setRandomImages}) => {


    function closeModal() {
        setFindedPhoto({})
        setRandomImages([])
        setUser({})
    }
    

  return (
    <div className='modalimages'>
        <a onClick={closeModal} className='modalimages__close' href='#'></a>    
        <div className='modalimages__body'>
          {isLoad && <div className='modalimages__body-loader'><Loader /></div> }
          <img onClick={closeModal} width="40" height="40" className='close' src={close} alt="close"/>
          <div className='profile__body'>
                <ModalUserProfile user={user} />
                <div className='biography'>
                    <p><span>Biography:</span> {user.bio || 'unknown'}</p>
                    <p><span>Location:</span>  {user.location || 'unknown'}</p>
                </div>
                <ModalUserIcons user={user} />
                <ModalUserSocial user={user} />
          </div>
        </div>
    </div>
  )
}

export default ModalUser