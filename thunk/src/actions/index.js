import axios from "axios";

export const FETCH_QUOTE_LOADING = 'FETCH_QUOTE_LOADING';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAIL = 'FETCH_QUOTE_FAIL';

export const getQuote = () => dispatch => {
    dispatch({type: FETCH_QUOTE_LOADING})
    axios
        .get('https://api.kanye.rest')
        .then(res => {
            dispatch({type: FETCH_QUOTE_SUCCESS, payload: res.data.quote})
        })
        .catch(err => {
            dispatch({type: FETCH_QUOTE_FAIL, payload: err.response.code})
        })
}

// export const fetchQuoteLoading = () => {
//     return({
//         type:FETCH_QUOTE_LOADING
//     })
// }

// export const fetchQuoteSuccess = (quote) => {
//     return({type: FETCH_QUOTE_SUCCESS, payload: quote})
// }

// export const fetchQuoteFail = (error) => {
//     return({type: FETCH_QUOTE_FAIL, payload: error})
// }