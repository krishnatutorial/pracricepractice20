// Write your code here
import {Component} from 'react'

import GoogleSuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  selectGoogleSuggestion = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="image"
          alt="google logo"
        />
        <div className="google">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            type="search"
            onChange={this.selectGoogleSuggestions}
            placeholder="Search Google"
            value={searchInput}
          />
        </div>
        <ul>
          {searchResults.map(eachSuggestion => (
            <GoogleSuggestionItem
              key={eachSuggestion.id}
              suggestionDetails={eachSuggestion}
              updateSearchInput={this.updateSearchInput}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default GoogleSuggestions
