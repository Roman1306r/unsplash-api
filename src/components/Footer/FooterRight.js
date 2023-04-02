import React from 'react'
import github from '../../assets/images/github.png'
import telegram from '../../assets/images/telegram.png'


const FooterRight = () => {
  return (
    <div className='footer__right'>
            <a href='https://github.com/Roman1306r' target="_blank"><img width="30" height="30" src={github} alt="github" /></a>
            <a href='' target="_blank"><img  width="30" height="30" src={telegram} alt="github" /></a>       
    </div>
  )
}

export default FooterRight