import React from 'react'
import close from '../../assets/images/close.png'
import ModalImagesBody from './ModalImagesBody';
import ModalImagesInfo from './ModalImagesInfo';
import ModalRandomImages from './ModalRandomImages';
import download from '../../assets/images/download1.gif'
import Loader from '../../common/Loader/Loader';


const ModalImages = ({findedPhoto, setFindedPhoto, randomImages, getPhotosById, setRandomImages, isLoad, getUserbyUserName, setUser}) => {


  function closeModal() {
    setFindedPhoto({})
    setRandomImages([])
    setUser({})
  }

  return (
    <div className='modalimages'>
        <a onClick={closeModal} className='modalimages__close' href='#'></a>    
        <div className='modalimages__body'>
          {isLoad && <div className='modalimages__body-loader'><Loader /></div> }
          <a target="_blank" className='modalimages-download download' download={true} href={findedPhoto.links.download}><img width="45" height="45" src={download} alt="download" /></a>
          <img onClick={closeModal} width="40" height="40" className='close' src={close} alt="close"/>
          <ModalImagesBody findedPhoto={findedPhoto} /> 
          <ModalImagesInfo setFindedPhoto={setFindedPhoto} getUserbyUserName={getUserbyUserName} findedPhoto={findedPhoto} />
          <h4>Other Images</h4>
          <ModalRandomImages getPhotosById={getPhotosById} randomImages={randomImages} />
        </div>
    </div>
  )
}

export default ModalImages