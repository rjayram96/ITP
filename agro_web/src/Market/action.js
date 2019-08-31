import marketSource from './source';

export function fetchAuditEvents(search) {
    return function (dispatch) {
        dispatch({type: 'FETCH_AUDIT_EVENTS', payload:marketSource.fetchAuditEvents(search)});
    }
}