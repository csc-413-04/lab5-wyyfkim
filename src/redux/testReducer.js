const initialState = {
    test: 'test value',
    messages: ['a demo message']
};

const testReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'LOAD_MESSAGE':
            return Object.assign({}, state, {
                messages: action.messages
            });
        case 'IMPORT_MESSAGE':
            const newMessages = state.messages.slice(0);
            newMessages.unshift(action.message);
            return Object.assign({}, state, {
                messages: newMessages
            });
        default:
            return state;
    }
};

export default testReducer;