const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } = require("../ActionsType");

const reducer2 = (state = [], actions) => {
    switch (actions.type) {
        case ADD_TO_WISHLIST:
            return [...state, actions.payload];
        case REMOVE_FROM_WISHLIST:
            const deletedArray2 = state.filter((item, index) => {
                return index !== actions.payload
            });

            return deletedArray2;
        default:
            return state;


    }
};
export default reducer2;