import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user/index';
import { act } from 'react-dom/test-utils';

const userJoinPage = async(x) => {
    const res = await userAPI.userJoin(x)
    return res.data
}
const userFetchOnePage = async(x) => {
    const res = await userAPI.userFetchOne(x)
    return res.data
}
const userFetchListPage = async() => {
    const res = await userAPI.userFetchList()
    return res.data
}
const userLoginPage = async(x) => {
    const res = await userAPI.userLogin(x)
    return res.data
}
const userModifyPage = async(x) => {
    const res = await userAPI.userModify(x)
    return res.data
}
const userRemovePage = async(x) => {
    const res = await userAPI.userRemove(x)
    return res.data
}

export const joinPage = createAsyncThunk('users/join', userJoinPage)
export const detailPage = createAsyncThunk('users/detail', userFetchOnePage)
export const listPage = createAsyncThunk('users/list', userFetchListPage)
export const loginPage = createAsyncThunk('users/login', userLoginPage)
export const modifyPage = createAsyncThunk('users/modify', userModifyPage)
export const removePage = createAsyncThunk('users/remove', userRemovePage)

const userSlice = createSlice({
    name: users,
    initialState: {
        userState: {
            username:'', password:'', email:'', name:'', regDate:''
        },
        type: '',
        keyword: '',
        params: {}
    },
    reducers: {},
    extraReducers: {
        [joinPage.fulfilled]: ( state, action ) => { state.userState = action.payload },
        [detailPage.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload },
        [listPage.fulfilled]: ( state, {meta, payload} ) => { state.pageResult = payload },
        [loginPage.fulfilled]: ( state, {meta, payload} ) => {
            state.userState = payload
            //window는 윈도우 브라우저 창을 말한다. (JSX)
            window.localStorage.setItem('sessionUser', JSON.stringify(payload))
        },
        [modifyPage.fulfilled]: ( state, action ) => {
            state.userState = payload
            window.localStorage.setItem('sessionUser', JSON.stringify(payload))
        },
        [removePage.fulfilled]: ( state, {meta, payload} ) => {
            state.userState = payload
            window.localStorage.setItem('sessionUser', '')
        }
    }
})
export const currentUserState = state => state.users.userState
export const currentUserParam = state => state.users.param
export default userSlice.reducer

