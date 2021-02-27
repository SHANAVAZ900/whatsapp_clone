//this is before user has not logged in
export const initialState = {
    user:null,
};
//This is pushing the information into the data layer i.e.pushing the user details to a particular data layer
export const actionTypes = {
    SET_USER : "SET_USER",
};

const reducer = (state, action) => {
    switch(action.type){
        //listening to what type of action should be taken i.e..SET_USER
        case actionTypes.SET_USER:
            return {
                //keep the state of the data layer without any change
                ...state,
                //here change the layer to whatever dispatched
                user: action.user,
            };

        default:
            return state;
    }
};

export default reducer;