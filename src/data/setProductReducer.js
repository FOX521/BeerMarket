import mocData from '../moc/mocData';

let {DataPresent} = mocData;
let initialState = DataPresent;

const setProductReducer = (state = initialState, action) => {
    let stateCopy = {...state};
        switch (action.type) {
            case 3:
                
                break;
        
            default:
                break;
        }
    return stateCopy;
};

export default setProductReducer;