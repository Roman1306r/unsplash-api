import React from 'react'
import FooterCenter from './FooterCenter'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'



const Footer = ({getTotalStats}) => {
  return (
    <div className='footer'>
        <FooterLeft />
        <FooterCenter getTotalStats={getTotalStats} />
        <FooterRight />
    </div>
  )
}

export default Footer