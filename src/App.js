import './App.css';
import { useEffect, useState} from "react";
import Header from "./components/Header/Header";
import Loader from "./common/Loader/Loader";
import {asyncFunc} from "./api/api";
import Error from "./common/Error/Error";
import ImagesContainer from './components/ImagesContainer/ImagesContainer';
import ModalImages from './components/ModalImages/ModalImages';
import ModalUser from './components/ModalUser/ModalUser';




function App() {
    const [images, setImages] = useState(null)
    const [isLoad, setIsLoad] = useState(true)
    const [isError, setIsError] = useState(false)
    const [page, setPage] = useState(1)
    const [value, setValue] = useState('')
    const [findedPhoto, setFindedPhoto] = useState({})
    const [randomImages, setRandomImages] = useState([])
    const [user, setUser] = useState({})
    const [orderBy, setOrderBy] = useState('relevant')
    const [orientation, setOrientation] = useState('')
    const [color, setColor] = useState('')



 
    const getImages = async(value, page, order, orientation, color) => {
      const data = await asyncFunc.getImagesAPI(value, setIsLoad, setIsError, page, order, orientation, color)
      setImages(data)
    }
    const getPhotosById = async (id) => {
      try {
        setRandomImages([])
        setFindedPhoto({}) 
        const currentImages = await asyncFunc.getPhoto(id, setIsError) 
        setIsLoad(true)
        setFindedPhoto(currentImages)
        for (let index = 0; index < 3; index++) {
          const data = await asyncFunc.getRandomImages(setIsError) 
          setRandomImages(prev => [...prev, data]) 
        } 
      } catch (error) {
        setIsError(true)
      } finally {
        setTimeout(() => setIsLoad(false), 500)
      }
    }
    const getUserbyUserName = async(username) => {
      const data = await asyncFunc.getUser(username, setIsError)
      setUser(data);
    }
    const pageIncrement = () => {
      setPage(page + 1)
      getImages(value, page + 1, orderBy, orientation, color)
    }
    const pageDecrement = () => {
      if(page <= 1) setPage(1)
      else setPage(page - 1)
      getImages(value, page - 1, orderBy, orientation, color)
    }
    




    useEffect(() => {
      getImages(value, page, orderBy, orientation, color) 
    }, [])




  return (
    <div className="App">
        <Header color={color} setColor={setColor} orientation={orientation} setOrientation={setOrientation} orderBy={orderBy} setOrderBy={setOrderBy} getImages={getImages} value={value} setValue={setValue} setPage={setPage} page={page} />
        <div className='query'>Found: {images?.total || 0} photos</div>
        {isLoad &&  <Loader />}
        {isError && <Error color={color} orientation={orientation} orderBy={orderBy} setIsError={setIsError} getImages={getImages} page={page} value={value}/>}
        {images && !isLoad && <ImagesContainer setIsError={setIsError} getUserbyUserName={getUserbyUserName} pageDecrement={pageDecrement} getPhotosById={getPhotosById} pageIncrement={pageIncrement}  page={page} images={images} /> }
        {findedPhoto.id && <ModalImages setUser={setUser} getUserbyUserName={getUserbyUserName} isLoad={isLoad} setRandomImages={setRandomImages} getPhotosById={getPhotosById} randomImages={randomImages} setFindedPhoto={setFindedPhoto} findedPhoto={findedPhoto} />}
        {user.id && <ModalUser setFindedPhoto={setFindedPhoto} setRandomImages={setRandomImages}  isLoad={isLoad} user={user} setUser={setUser} />}  
    </div>
  );
}

export default App;
