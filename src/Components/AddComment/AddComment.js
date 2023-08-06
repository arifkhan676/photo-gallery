import React, { Component } from 'react'
import { Form, Input } from 'reactstrap'
import { connect } from 'react-redux'



class AddComment extends Component {

    constructor(props) {
        super(props)
        this.state = {
            author: '',
            review: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        console.log(this.state);

        this.state = ({
            author: '',
            review: ''
        })
        e.preventDefault();
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit} >
                    <Input
                        type='text'
                        name='author'
                        value={this.state.author}
                        onChange={this.handleChange}
                        placeholder='Your Name'
                    />
                    <Input
                        type='textarea'
                        name='review'
                        value={this.state.review}
                        onChange={this.handleChange}
                        placeholder='Please give your Review'
                    />
                    <Input
                        type='submit'
                        className='text-primary'
                    />
                </Form>
            </div>
        )
    }

}

export default (AddComment)
