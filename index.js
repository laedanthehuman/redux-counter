import expect from 'expect';


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

expect(
    counter(0, { type: 'INCREMENT' })
).toEqual(1);

expect(
    counter(1, { type: 'INCREMENT' })
).toEqual(2);

expect(
    counter(3, { type: 'INCREMENT' })
).toEqual(4);

expect(
    counter(3, { type: 'DECREMMENT' })
).toEqual(2);

expect(
    counter(2, { type: 'DECREMMENT' })
).toEqual(1);

expect(
    counter(2, { type: 'DECREMMENT' })
).toEqual(1);

console.log('test passed!')