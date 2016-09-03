import {createStore} from 'Redux';

const counter = (state=0, action) =>{
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMMENT':
            return state - 1;

        default:
            return state;
    }
}

const store = createStore(counter);

