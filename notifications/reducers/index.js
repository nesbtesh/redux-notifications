export function createReducer(initialState, reducerMap) {
    return (state = initialState, action) => {
        const reducer = reducerMap[action.type];

        return reducer
            ? reducer(state, action.payload)
            : state;
    };
}
const initialState = {
    'small': [],
    'big': [],
};

export default createReducer(initialState, {
    ['NOTIF_SEND']: (state, payload) => {
        return Object.assign({}, state, {
            'small': [payload, ...state.small]
        });
    },
    ['NOTIF_DISMISS']: (state, payload) => {
        return Object.assign({}, state, {
            'small': state.small.filter(notif =>
                      notif.id !== payload
                  )
        });
    },
    ['NOTIF_CLEAR']: (state, payload) => {
        return Object.assign({}, state, {
            'small': [],
            'big': []
        });
    },
    ['BIG_NOTIF_SEND']: (state, payload) => {
        return Object.assign({}, state, {
            'big': [payload, ...state.big]
        });
    },
    ['BIG_NOTIF_DISMISS']: (state, payload) => {
        return Object.assign({}, state, {
            'big': state.big.filter(notif =>
                      notif.id !== payload
                  )
        });
    },
});