import {FETCH_QUOTE_LOADING, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAIL} from '../actions/index';


const initialState = {
  quote: null,
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case(FETCH_QUOTE_LOADING):
      return({
        ...state,
        isFetching: true,
      })
    case(FETCH_QUOTE_SUCCESS):
      return({
        ...state,
        isFetching: false,
        quote: action.payload
      })
    case(FETCH_QUOTE_FAIL):
      return({
        ...state,
        error: action.payload,
        isFetching: false,
      })
    default:
      return state;
  }
};