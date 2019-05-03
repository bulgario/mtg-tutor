import React from 'react';

class SearchCard extends React.Component {
    constructor() {
        super()
        this.state = {
            cardSet: [],
            choosenCardSet: []
        }
    }

    componentDidMount() {
        fetch('https://api.scryfall.com/sets')
            .then(response => response.json())
            .then(response => {
                response.data.forEach(data => {
                    this.setState(prevState => ({
                        cardSet: [...prevState.cardSet, data.name]
                    }))
                });
            })
    }

    cardSelect = () => {
        const { cardSet } = this.state
        return cardSet.map(function (cardSet) {
            return (<option value={cardSet}>{cardSet}</option>)
        })
    }

    // componentDidMount() {
    //     fetch('https://api.scryfall.com/cards')
    //     .then(response => response.json())
    //     .then(response => {
    //         response.data.forEach(data => {
    //             // this.setState({cardImage: data.image_uris.small})
    //             console.log(data.image_uris.small)
    //         });
    //     })

    // }

    render() {
        return (
            <select onClick={this.cardSelect}>
                {this.cardSelect()}
            </select>
        )
    }

}

export default SearchCard