// reducer.js
import { set_title } from "../type"; // SET_USERNAME nomli action type'ini import qilamiz
import initialState from "../initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case set_title:
      return { ...state, userName: action.payload }; // userName'ni o'zgartiramiz
    // Boshqa actionlar...
    default:
      return state;
  }
};

export default reducer;
