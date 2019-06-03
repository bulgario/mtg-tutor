import React from 'react';


import DisplayCard from './DisplayCard'

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
                    if (data.set_type == "core" || data.set_type == "expansion") {
                        this.setState(prevState => ({
                            cardSet: [...prevState.cardSet, data.name]
                        }))
                    }
                });
            })
    }

    cardSelectDisplay = () => {
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
            <div>
                <select onChange={this.handleChange}>
                    {this.cardSelectDisplay()}
                </select>
            </div>
        )
    }

}

export default SearchCard