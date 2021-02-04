/* eslint-disable no-unused-vars */
import * as Types from './actiontypes';

const initialState = {

};

const persist = (state = initialState, { type, payload } = {}) => {
    let states = state;
    switch (type) {
        default:
            states = state;
            break;
    }
    return states;
};
export default persist;
