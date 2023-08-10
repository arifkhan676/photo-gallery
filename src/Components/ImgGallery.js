import React from 'react'
import '../App.css'
import AddComment from './AddComment/AddComment'

const ImgGallery = (props) => {
    // console.log(props.imgSelect);
    return (

        <div className="image-card" onClick={props.imgSelect}>
            <img className='img' src={props.img.original} alt='' />
            <button style={{ marginTop: 5 }} className='btn btn-dark'  >Review</button>
            <AddComment imgId={props.img.imgId} />
        </div>



    )
}

export default ImgGallery
