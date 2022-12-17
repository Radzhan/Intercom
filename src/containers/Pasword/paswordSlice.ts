import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number[];
    arrForClass: string[];
}

const initialState: CounterState = {
    value: [],
    arrForClass: ['panel'],
};

const Password = '2042'
let check = '';

export const counterSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        addNumber: (state, action: PayloadAction<number>) => {
            if (state.value.length < 4) {
                state.value.push(action.payload);
            }
        },

        deleteNumber: (state) => {
            state.value = state.value.slice(0, -1)
        },
        checkPassword: (state) => {
            state.value.forEach(item => {
                check += item
            })
            if (check === '2042') {
                alert('Access Granted')
                state.arrForClass = ['panel' , 'green']
                state.value = []
                check = ''
            } else if (check !== '2042'){ 
                alert('Access Denied')
                state.arrForClass = ['panel' , 'red']
                state.value = []
                check = ''
            }
        }
    }
});

export const counterReducer = counterSlice.reducer;
export const { addNumber, deleteNumber, checkPassword } = counterSlice.actions;