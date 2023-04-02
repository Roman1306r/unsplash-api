import React, { useEffect } from 'react'
import { filters } from '../../common/data/filters'




const Filters = ({orderBy, setOrderBy, getImages, value, orientation, setOrientation, color, setColor, setPage}) => {

    useEffect(() => {
        const selects = document.querySelectorAll('select')
        const arrows = document.querySelectorAll('.arrow')
        if(selects.length > 0 && arrows.length > 0) {
            selects.forEach(s => {
                for (let index = 0; index < selects.length; index++) {
                    const select = selects[index];
                    select.addEventListener('focus', (e) => {
                        arrows[index].classList.add('rotate')
                    }) 
                    select.addEventListener('blur', (e) => {
                        arrows[index].classList.remove('rotate')
                    }) 
                }     
            })
        }      
    }, [])



    const orientationArray = filters.orientation.map(option => <option value={option.value} key={option.id}>{option.value || option.title} {option.image || ''}</option>)
    const colorArray = filters.color.map(option => <option value={option.value} key={option.id}>{option.value || option.title} {option.image || ''}</option>)
    const sortedArray = filters.sorted.map(option => <option value={option.value} key={option.id}>{option.value}</option>)



    const getCurrentOrder = (event) => {
        setOrderBy(event.target.value)
        setPage(1)
        getImages(value, 1, event.target.value, orientation, color)
    }
    const getCurrentOrientation = (event) => {
        setOrientation(event.target.value)
        setPage(1)
        getImages(value, 1, orderBy, event.target.value, color)
    }
    const getCurrentColor = (event) => {
        setColor(event.target.value)
        setPage(1)
        getImages(value, 1, orderBy, orientation, event.target.value)
    }



  return (
    <div className="header__filters">
        <div className='header__filters-item filter__orientation'>
            <select onChange={getCurrentOrientation} defaultValue={orientation}>
                {orientationArray}
            </select>
            <div className='arrow'>&#9660;</div>
        </div>
        <div className='header__filters-item filter__color'>
            <select onChange={getCurrentColor} defaultValue={color}>
                {colorArray}
            </select>
            <div className='arrow'>&#9660;</div>
        </div>
        <div className='header__filters-item filter__order'>
            <select onChange={getCurrentOrder} defaultValue={orderBy}>
                {sortedArray}
            </select>
            <div className='arrow'>&#9660;</div>
        </div>
    </div>
  )
}

export default Filters