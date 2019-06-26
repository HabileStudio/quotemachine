import React from 'react'
import './styles/App.css'
import QuoteBoxWrapper from './components/QuoteBoxWrapper'

class App extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    return (
      <div className="App">
        <QuoteBoxWrapper />
      </div>
    )
  }
}

export default App
