import React from 'react'

import SearchCard from './SearchCard'


class DisplayCard extends React.Component {
    constructor() {
        super()
        this.state = {}
    }


    render() {
        console.log("aqui tem", this.props)
        return (
            <div>Display the image of the cards</div>
        )
    }
}

export default DisplayCard