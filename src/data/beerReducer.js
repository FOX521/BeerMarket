import mocData from '../moc/mocData';

let {DataDrink} = mocData;
let initialState = DataDrink;

const reducerBeerPage = (state = initialState, action) => {
    let stateCopy = {...state}
    switch (action.type) {
        case 0:
            
            break;
    
        default:
            break;
    }
    return stateCopy;
};

export default reducerBeerPage;