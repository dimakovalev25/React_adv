import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {
    counter: 0,
    isShow: true,
}

const initialStateSec = {
    second: 0,
}

const initialStateAuth = {
    isAuth: false,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        showCounter(state) {
            state.isShow = !state.isShow
        },
    }

});

const secondsSlice = createSlice({
    name: 'seconds',
    initialState: initialStateSec,
    reducers: {
        updateSeconds(state, action) {
            state.second = action.payload
        },
    }

})

const authSlice = createSlice({
    name: 'auth',
    initialState: initialStateAuth,
    reducers: {
        unassigned(state) {
            state.isAuth = false
        },
        assigned(state) {
            state.isAuth = true
        }
    }

})


// const counterReducer = (state = initialState, action) => {
//
//     if (action.type === 'increment') {
//         return {
//             ...state,
//             counter: state.counter + action.payload
//         }
//     }
//
//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             counter: state.counter - 1
//         }
//     }
//
//     if (action.type === 'showCounter') {
//         return {
//             ...state,
//             isShow: !state.isShow
//         }
//     }
//
//     if (action.type === 'SEC') {
//         return {
//             ...state,
//             seconds: action.payload
//         }
//     }
//
//     return state;
// }

// const store = legacy_createStore(counterSlice.reducer);

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        seconds: secondsSlice.reducer,
        auth: authSlice.reducer,
    }
})

export const counterActions = counterSlice.actions;
export const secondsActions = secondsSlice.actions;
export const authActions = authSlice.actions

export default store;
