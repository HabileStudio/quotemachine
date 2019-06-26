export const REQUEST_QUOTE  = 'REQUEST_QUOTE'
export const RECEIVED_QUOTE = 'RECEIVED_QUOTE'
// export const FETCH_QUOTE    = 'FETCH_QUOTE'

export const requestQuote = () => {
  // console.log('requesting...')
  return ({
    type:       REQUEST_QUOTE,
    text:       '',
    author:     '',
  })
}
export const receivedQuote = (data) => {
  // console.log('received...')
  return ({
    type:       RECEIVED_QUOTE,
    text:       data.content,
    author:     data.author
  })
}

const API_URL = 'https://api.quotable.io/random'

export const fetchQuote = () => {
  // console.log('main fetching...')
  return (dispatch) => {
    dispatch(requestQuote())
    return fetch(API_URL)
      .then( r => r.json() )
      // .then( d => console.log(d))
      .then( d => dispatch(receivedQuote(d)) )
      .catch(error => console.error(error));
  }
}