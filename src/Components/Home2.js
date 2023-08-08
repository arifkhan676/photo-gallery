import React, { Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    console.log("mpt", state);
    return {
        images: state.images
    }
}


class Home2 extends Component {

    componentDidMount() {
        console.log("state", this.state);
        console.log("props", this.props);
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

export default connect(mapStateToProps)(Home2)
