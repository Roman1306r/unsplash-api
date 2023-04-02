import repeat from '../../assets/images/repeat.png'

const Error = ({getImages, page, value, setIsError, orderBy, orientation, color}) => {

    function repeatFn() {
        getImages(value, page, orderBy, orientation, color)
        setIsError(false)
    }



    return <div id="main">
                <div className="fof">
                    <h1>Error 404</h1>
                    <button onClick={repeatFn}>
                        Repeat
                        <img width="25" height="25" src={repeat} alt="repeat"/>
                    </button>
                </div>
            </div>
}
export default Error;