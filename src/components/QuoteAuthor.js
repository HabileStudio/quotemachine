import React from 'react'
import '../styles/QuoteAuthor.css'

class QuoteAuthor extends React.Component{
  render(){
    return(
      <p className="QuoteAuthor"
           id="author">
        {this.props.author}
      </p>
    )
  }
}

export default QuoteAuthor