const { ADD_TO_CART, REMOVE_FROM_CART } = require("../ActionsType");

const reducer = (state = [], actions) => {
    switch (actions.type) {
        case ADD_TO_CART:
            return [...state, actions.payload];
        case REMOVE_FROM_CART:
            const deletedArray1 = state.filter((item, index) => {
                return index !== actions.payload
            });

            return deletedArray1;
        default:
            return state;


    }
};
export default reducer;