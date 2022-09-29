import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
	name: 'userName',
    initialState: '',
    reducers: {
        setName : (state, actions) =>{
            return actions.payload
        }
    }
})

export const { setName  } = userNameSlice.actions;

export default userNameSlice.reducer;