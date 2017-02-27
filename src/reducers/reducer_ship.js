import {FETCH_SHIPS} from "../actions/index";

export default function(state = [], action){
    switch(action.type){
        case FETCH_SHIPS :
       //console.log("payload.data : ",action.payload.data);
       return [action.payload.data, ...state]; // new ES6 syntax which does the same thing as above
    }
    return state;
}