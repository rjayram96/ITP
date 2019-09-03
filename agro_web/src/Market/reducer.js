export default function reducer(state = {
    markets:[],
    fetchState: 0,

    marketSearch:{},

    mutateState: 0,
    lastCreated: [],
    errorMsg:{},
    isModal:false,

}, action) {

    switch (action.type) {

        case 'FETCH_AUDIT_EVENTS_PENDING': {
            return {...state, fetchState: 1}
        }
        case 'FETCH_AUDIT_EVENTS_FULFILLED': {
            return {...state, fetchState: 2, auditEvents: action.payload.data.queryMarket}
        }
        case 'FETCH_AUDIT_EVENTS_REJECTED': {
            return {...state, fetchState: 3, error: action.payload}
        }


    }

    return state
}
