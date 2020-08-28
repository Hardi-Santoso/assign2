const defaultState = {
    register:[]
};

const registerReducer = (state = defaultState, action) => {
    const{ type,payload} = action
    switch (type) {
        case 'GET_USER':
            return state.register;
        
        case 'AddUser':
            return {
                ...state,
                register: [
                    ...state.register,
                    payload,
                ]
            }
        default:
            return state;
    }
};

export default registerReducer;