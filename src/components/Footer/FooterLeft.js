import React from 'react'
import logo from '../../assets/images/favicon.png'


const FooterLeft = () => {
  return (
    <a href='https://unsplash.com/' target="_blank" className='footer__left'>
              <img width="46" height="46" src={logo} alt="logo" />
              Photos for everyone
    </a>
  )
}

export default FooterLeft