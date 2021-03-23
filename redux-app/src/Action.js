export const increment='INCREMENT';
export const decrement='DECREMENT';

export const incrementAction=()=>({
    type:increment,
    payload:{value:5}
})
export const decrementAction=()=>({
    type:decrement,
})