import React, { useState } from 'react'
import ImgGallery from './ImgGallery';
import '../App.css'
import { Modal, Button, ModalBody, ModalFooter } from 'reactstrap';
import ImgModal from './ImgModal';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        images: state.images
    }
}

const Gallery = (props) => {

    const [image] = useState(props.images);
    const [imageModal, setImgModal] = useState(null);
    const [modalOpen, setModalOpen] = useState(false)
    //  

    const OnSelectImg = (item) => {
        setImgModal(item)
        setModalOpen(true)
    }

    const closeModal = () => { setModalOpen(false) }

    const pic = image.map((item) => {
        return <ImgGallery
            img={item}
            key={item.id}
            imgSelect={() => { OnSelectImg(item) }}
        />
    })

    const imageItem = imageModal ? <ImgModal
        AllImage={imageModal}
        AddComment={props.AddComment}
    /> : null;




    return (

        <div className="container">
            {pic}

            <Modal isOpen={modalOpen} >
                <ModalBody>
                    {imageItem}
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={closeModal} >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>

        </div>


    )
}

export default connect(mapStateToProps)(Gallery)
