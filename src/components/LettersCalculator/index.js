// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onCalculateLetterLength = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="calculator-container">
          <h1 className="heading">
            Calculate the <br /> letters You
            <br /> enter
          </h1>
          <label for="inputId" className="input-text">
            Enter the phrase
          </label>
          <input
            type="text"
            placeholder="Enter the phrase"
            value={searchInput}
            className="input-element"
            id="inputId"
            onChange={this.onCalculateLetterLength}
          />
          <p type="button" className="calculator-btn">
            No.of letters: {searchInput.length}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
      </div>
    )
  }
}
export default LettersCalculator
