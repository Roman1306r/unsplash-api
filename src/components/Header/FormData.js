import React from 'react'
import search from '../../assets/images/search.png'




const FormData = ({getImages, value, setPage, setValue, page, orderBy, orientation, color}) => {


  function getImagesByClickButton(event) {
      event.preventDefault()
      if(value.length < 1) return
      setPage(1)
      getImages(value, page, orderBy, orientation, color)
  }



  return (
    <form onSubmit={getImagesByClickButton}  className="header__searchfield">
        <input value={value} onChange={(event) => setValue(event.target.value)} type='text' placeholder="search among all photos" />
        <button>
            Search
            <img width="25" height="25" src={search} alt="search"/>
        </button>
    </form>
  )
}

export default FormData