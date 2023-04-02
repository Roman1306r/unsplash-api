import React from 'react'

const ModalUserProfile = ({user}) => {
  return (
    <div className='profile__body-top'>
                    <div>
                        <img src={user.profile_image.large} alt={user.username} />
                    </div>
                    <div>
                        <h2>{user.first_name} {user?.last_name || ''}</h2>
                        <h3>Username: {user.username}</h3>   
                    </div>
    </div>
  )
}

export default ModalUserProfile