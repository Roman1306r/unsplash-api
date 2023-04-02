import React from 'react'
import next from '../../../assets/images/next.png'
import prev from '../../../assets/images/prev.png'

const NextPrevButton = ({page, images, pageIncrement, pageDecrement}) => {


    
  return (
    <div className='button__pagination'>
        {page >= 2 && <button onClick={pageDecrement}>Prev<img width="25" height="25" src={prev} alt="prev"/></button>}
        {page < images.total_pages  && <button onClick={pageIncrement}>Next<img width="25" height="25" src={next} alt="next"/></button>}    
    </div>
  )
}

export default NextPrevButton