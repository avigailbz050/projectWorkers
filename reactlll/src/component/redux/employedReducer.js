import produce from 'immer'
import createReducer from "./ReducerUtil";

const initialState={
    employed:{
        firstName:"",
        lastName:"",
        gmail:"",
        password:"",
    }
}
const employed={
    saveEmployed(state,action){
        state.employed=action.payload
    }
}

export default produce((state, action) => createReducer(state, action, employed), initialState);
