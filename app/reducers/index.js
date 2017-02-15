/**
 * Created by associate on 2/14/17.
 */
"use strict";

import {INCREMENT_COUNT} from '../constants/actionTypes.js'

export default function reducer(state=0, action){
    console.log(`reducer called ${action.type}`);
    switch(action.type){
        case INCREMENT_COUNT:
            return state+1;
        default:
            return state;
    }
}