const { ADD_ADDRESS,DELETE_ADDRESS } = require("../ActionsType");

const AddressReducer = (state = [], actions) => {
    switch (actions.type) {
        case ADD_ADDRESS:
            return [...state, actions.payload];
        case DELETE_ADDRESS:
            const deletedArray1 = state.filter((item, index) => {
                return index !== actions.payload
            });

            return deletedArray1;
        default:
            return state;


    }
};
export default AddressReducer;