import React from 'react'
import '../styles/TweetQuote.css'

class TweetQuote extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return(
      <div className="TweetQuote">
        <a id="tweet-quote"
           href={ `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${this.props.text}" ${this.props.author}`}
           target="_blank" rel="noopener noreferrer">
          Tweet
        </a>
      </div>
    )
  }
}

export default TweetQuote