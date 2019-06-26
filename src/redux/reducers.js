import * as actions from './actions'

const defaultState = {
  fetching:  false,
  text:      '',
  author:    ''
}

const rootReducer = (state = defaultState, action) => {
  switch(action.type){
    case actions.REQUEST_QUOTE:
      return Object.assign({}, state, {
        fetching: true
      })
    case actions.RECEIVED_QUOTE:
      // console.log('reduced')
      return Object.assign({}, state, {
        fetching: false,
        text:     action.text,
        author:   action.author
      })
    // case actions.FETCH_QUOTE:
    //   return Object.assign({}, state, {
    //     quote:    action.quote
    //   })
    default:
      return state
  }
}

export default rootReducer