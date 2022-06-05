import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
	phone_number: string | null
	phone_hash: string | null
}

const initialState = {
	phone_number: null,
	phone_hash: null
} as CounterState

const counterSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setPhoneNumber(state, action: PayloadAction<string | null>) {
			state.phone_number = action.payload
		},
		setPhoneHash(state, action: PayloadAction<string | null>) {
			state.phone_hash = action.payload
		}
	},
})

export const {setPhoneNumber, setPhoneHash} = counterSlice.actions
export default counterSlice.reducer