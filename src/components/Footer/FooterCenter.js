import React from 'react'

const FooterCenter = ({getTotalStats}) => {

  const getStats = (event) => {
    event.preventDefault()
    getTotalStats()
  }


  return (
    <div className='footer__center'>
        <div className='footer__left-item'>
                <a href="https://roman1306r.github.io/CV/" target="_blank">About the developer</a>
        </div>
        <div className='footer__left-item'>
                <a href="https://unsplash.com/developers" target="_blank">API</a>
        </div>
        <div className='footer__left-item'>
                <a onClick={getStats} href="#" target="_blank">Stats</a>
        </div>
    </div>
  )
}

export default FooterCenter