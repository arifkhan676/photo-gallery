import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import AddComment from './AddComment/AddComment'

const ImgModal = ({ AllImage }) => {
    // console.log(props.AllImage);
    return (
        <div>
            < Card style={{ marginTop: "10px" }}>
                <CardImg top src={AllImage.original} alt='' />
                <CardTitle>
                    Please Review This Image
                </CardTitle>
                <CardBody>
                    <AddComment />
                </CardBody>
            </Card >
        </div>
    )
}

export default ImgModal
/*
    < Card style = {{ marginTop: "10px" }}>
        <CardImg top src={props.AllImage} alt='' />

</Card > 

*/