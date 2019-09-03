import marketSource from './source';

export function fetchMarkets(search) {
    return function (dispatch) {
        dispatch({type: 'FETCH_AUDIT_EVENTS', payload:marketSource.fetchMarkets(search)});
    }
}