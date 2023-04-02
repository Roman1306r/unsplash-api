import React from 'react'
import view from '../../assets/images/view.png'



const ModalImagesInfo = ({findedPhoto, getUserbyUserName, setFindedPhoto}) => {


    const tags = findedPhoto.tags.map((tag, index) => {
        if(findedPhoto.tags.length > 0)  return <li key={index}>{tag.title} &diams; &thinsp;</li>  
      })
    

    const openUserModal = () => {
      getUserbyUserName(findedPhoto.user.username)
      setFindedPhoto({})
    }


  return (
    <div className='modalimages__body-info'>
              <div className='modalimages__body-column'>
                  <span className='view'><img width="30" height="30" src={view} alt='view' /> {findedPhoto.views}</span>
                  <h3>Width/Height:  <span>{findedPhoto.width}</span>/<span>{findedPhoto.height}</span></h3>
              </div>
              <div className='modalimages__body-column'>
                  <div className='modalimages__body-user'>
                    <h2 onClick={openUserModal}><img width="30" height="30" src={findedPhoto.user.profile_image.small} alt="avatar" /> {findedPhoto.user.name}</h2>
                  </div>
                  <h2>{findedPhoto.alt_description || findedPhoto.description}</h2> 
              </div>
              <div className='modalimages__body-column'>
                  <h3>Published: {findedPhoto.created_at}</h3>
                  <h3 style={{flex: '0 0 60%'}} >Tags: <ul style={{display: 'flex',
                  alignItems: 'center', flexWrap: 'wrap'}}>{tags}</ul></h3> 
              </div>            
    </div>
  )
}

export default ModalImagesInfo