import React, { useState } from 'react'
import { asyncFunc } from '../../api/api'
import Footer from '../Footer/Footer'
import ImageItem from './ImageItem/ImageItem'
import NextPrevButton from './NextPrevButton/NextPrevButton'
import Stats from './Stats/Stats'



const ImagesContainer = ({images, page, getPhotosById, pageIncrement, pageDecrement, getUserbyUserName, setIsError}) => {

  const [stats, setStats] = useState({})
    

  const getTotalStats = async() => {
    const data = await asyncFunc.getStats(setIsError)
    setStats(data)
  }
  let imagesArray = images.results.map(img =>  <ImageItem getUserbyUserName={getUserbyUserName} getPhotosById={getPhotosById}  key={img.id} {...img} />)
 
    

  return (
    <main className='main'>
        {images.total === 0 && <h2>No results found</h2>}
        {images.total > 0 && <div className='container'>
                                <div className='container__block'>{imagesArray.filter((_, index) => index < 8 )}</div>
                                <div className='container__block'>{imagesArray.filter((_, index) => index >= 8 && index < 16 )}</div>
                                <div className='container__block'>{imagesArray.filter((_, index) => index >= 16)}</div>
                            </div>}
        {images.total > 0 && <NextPrevButton pageDecrement={pageDecrement} pageIncrement={pageIncrement} page={page} images={images} />}
        {images.total > 0 && <Footer getTotalStats={getTotalStats} />}
        {stats.views && <Stats stats={stats} setStats={setStats}/>}
    </main>
  )
}

export default ImagesContainer