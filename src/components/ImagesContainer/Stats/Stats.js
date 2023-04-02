import React from 'react'
import StatsItem from './StatsItem'
import download from '../../../assets/images/download.png'
import view from '../../../assets/images/view.png'
import photos from '../../../assets/images/photos.png'
import request from '../../../assets/images/request.png'
import user from '../../../assets/images/user.png'
import app from '../../../assets/images/app.png'
import close from '../../../assets/images/close.png'



const Stats = ({stats, setStats}) => {
  return (
    <div className='stats'>
        <div className='stats__close' onClick={() => setStats({})}></div>
        <div className='stats__body'>
            <img onClick={() => setStats({})} width="40" height="40" className='stats__body-close' src={close} alt="close" />
            <h2>Statistics for the last month</h2>
            <div className='stats__container'>
                <StatsItem title={"downloads"} image={download} data={stats.downloads} />
                <StatsItem title={"new applications"} image={app} data={stats.new_applications} />
                <StatsItem title={"new developers"} image={user} data={stats.new_developers} />
            </div>
            <div className='stats__container'>
                <StatsItem title={"new photos"} image={photos} data={stats.new_photos} />
                <StatsItem title={"new requests"} image={request} data={stats.new_requests} />
                <StatsItem title={"views"} image={view} data={stats.views} />
            </div>
        </div>
    </div>
  )
}

export default Stats