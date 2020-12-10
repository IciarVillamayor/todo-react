

const initialState = {
    isOpened: false,
};

const rootReducer =(state = initialState, {type, payload}) =>{
    let newState = {...state};

    switch (type){
        case 'ADD_NEW_TODO':
            newState.isOpened = !newState.isOpened;
            break;
        case 'CANCEL_NEW_TODO':
          newState.isOpened = !newState.isOpened;
          break;
    }
    return newState;
};

export default rootReducer;