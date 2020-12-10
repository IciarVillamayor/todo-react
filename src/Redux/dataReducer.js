import todoListRaw from './../api/todoList';


const initialState = {
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

            })
            break;
    }
    return state;
};

export default dataReducer;