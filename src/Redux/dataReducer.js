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
                "title": payload.title,
                "badges": {
                    "badge1": payload.badges.badge1,
                    "badge2": payload.badges.badge2
                    
                }
            })
            break;
        case "CHECK_TODO": 
            let idx = state.data.findIndex(d => d.id == payload.id);
           
            console.log(payload.id);
            console.log(state.data[payload.id]);
            let curr = state.data.find(d => d.id == payload.id);
            let isDone = curr.isDone;
            state.data.splice(idx, 1, {
                ...curr, 
                isDone: !isDone
            });
            break;
    }
    return state;
};

export default dataReducer;