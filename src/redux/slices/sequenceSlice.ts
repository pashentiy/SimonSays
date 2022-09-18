import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface sequenceState {
    sequence: number[];
}

const initialState: sequenceState = {
    sequence: [],
};

export const sequenceSlice = createSlice({
    name: 'sequence',
    initialState,
    reducers: {
        restartSequence: (state) => {
            state.sequence = []
        },
        addNewElement: (state, action: PayloadAction<number>) => {
            state.sequence = [...state.sequence, action.payload];
        }
    },
});

export const { restartSequence, addNewElement } = sequenceSlice.actions;

export default sequenceSlice.reducer;
