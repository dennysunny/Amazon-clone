
export const initialState = {
    basket : [],
    user : null
};

//action is like add to basket ,, remove
const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            //logic
            return {
                ...state,   //returning state
                basket : [...state.basket, action.item]  // action.item is the data passed when add basket pressed item [id,price,rating] etc
            }
        case 'REMOVE_FROM_BASKET':
            //LOG
            return {state}
        default :
            return state;
    }
}

export default reducer;