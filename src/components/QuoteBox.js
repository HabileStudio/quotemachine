import React from 'react'
import '../styles/QuoteBox.css'

import QuoteText from '../components/QuoteText'
import QuoteAuthor from '../components/QuoteAuthor'
import TweetQuote from '../components/TweetQuote'

// import { Provider, connect } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from '../redux/reducers'
// import * as actions from '../redux/actions'


class QuoteBox extends React.Component{

  render(){
    const arrow = '→'
    return(
      <div className="QuoteBox"
           id="quote-box">
        <p className="loading-text">
          { this.props.fetching ? 'Thinking...' : 'Sharing thoughts' }
        </p>

        <QuoteText text={`"${this.props.text}"`} />
        <QuoteAuthor author={this.props.author} />
        <button onClick={this.props.getNewQuote}
                id="new-quote">New {arrow}</button>
        <TweetQuote text={this.props.text}
                    author={this.props.author} />
      </div>
    )
  }
}

export default QuoteBox