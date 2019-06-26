import React from 'react'
import '../styles/QuoteText.css'

class QuoteText extends React.Component{
  render(){
    return(
      <div className="QuoteText"
           id="text">
        <p>{this.props.text}</p>
      </div>
    )
  }
}

export default QuoteText