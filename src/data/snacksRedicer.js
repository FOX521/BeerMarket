import mocData from '../moc/mocData';

let {DataSnacks} = mocData;

let initialState = DataSnacks;

const reducerSnacksPage = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case 1:
            
            break;
    
        default:
            break;
    }
    return stateCopy;
}

export default reducerSnacksPage;