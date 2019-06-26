import React from 'react'
import { Provider, connect } from 'react-redux'

import QuoteBox from './QuoteBox'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../redux/reducers'
import * as actions from '../redux/actions'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

store.dispatch(actions.fetchQuote())

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    text:     state.text,
    author:   state.author,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getNewQuote: () => {
      dispatch(actions.fetchQuote())
    },
  }
}

class QuoteBoxWrapper extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(QuoteBox)


export default QuoteBoxWrapper