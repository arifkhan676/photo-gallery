import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css'

const ImgGallery = (props) => {
    // console.log(props.imgSelect);
    return (

        <div className="image-card" onClick={props.imgSelect}>
            <img className='img' src={props.img.original} alt='' />
            <button style={{ marginTop: 5 }} className='btn btn-dark'  >Review</button>
        </div>



    )
}

export default ImgGallery
