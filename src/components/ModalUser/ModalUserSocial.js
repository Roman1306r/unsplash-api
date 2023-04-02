import React from 'react'
import insta from '../../assets/images/insta.png'
import portfolio from '../../assets/images/portfolio.png'



const ModalUserSocial = ({user}) => {
  return (
    <div className='profile__body-social'>
            <p><img width="40" height="40" src={insta} alt="insta" /> @{user.instagram_username || 'unknown'}</p>
            <p><img width="40" height="40" src={portfolio} alt="portfolio" /><a target="_blank" href={user.portfolio_url}>{user.portfolio_url || 'unknown'}</a></p>
    </div>
  )
}

export default ModalUserSocial