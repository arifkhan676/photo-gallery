import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapToStateProps = state => {
    return {
        images: state.images
    }
}


class Home2 extends Component {

    render() {
        return (
            <div>

            </div>
        )
    }

}

export default connect(mapToStateProps)(Home2)
