import React from 'react';

class SearchCard extends React.Component {
    constructor() {
        super()
        this.state = {
            cardSet: [],
            choosenCardSet: ""
        }
        this.handleChange = this.handleChange.bind(this)
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

   handleChange (event) {
       this.setState({choosenCardSet: event.target.value})
   }

    render() {
        console.log(this.state.choosenCardSet)
        return (
            <select onChange={this.handleChange}>
                {this.cardSelect()}
            </select>
        )
    }

}

export default SearchCard