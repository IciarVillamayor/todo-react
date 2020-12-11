import todoListRaw from './../api/todoList';


const initialState = {
    isCrossedOut: false,
    data: [...todoListRaw],
};

const dataReducer =(state_ = initialState, {
    type,
    payload
}) => {
    const state = {
        ...state_
    };
    switch (type){
        case 'SAVE_NEW_TODO':
            state.data.push({
                "title": payload.title,
                "badges": {
                    "badge1": payload.badges.badge1,
                    "badge2": payload.badges.badge2
                    
                }
            })
            break;
        case 'CHECK_TODO':
            state.isCrossedOut = !state.isCrossedOut;
            break;
    }
    return state;
};

export default dataReducer;