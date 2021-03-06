import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userAPI } from 'features/user';

const userJoinPage = async(x) => {
   const res = await userAPI.userJoin(x)
   return res.data
}
const userDetailPage = async(x) => {
  const res = await userAPI.userDetail(x)
  return res.data
}
const userListPage = async({page}) => {
  alert('???')
  const res = await userAPI.userList(page)
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
export const detailPage = createAsyncThunk('users/detail', userDetailPage)
export const listPage = createAsyncThunk('users/list', userListPage)
export const loginPage = createAsyncThunk('users/login', userLoginPage)
export const modifyPage = createAsyncThunk('users/modify', userModifyPage)
export const removePage = createAsyncThunk('users/remove', userRemovePage)
export const logout = () => {
  window.localStorage.setItem('sessionUser', '')
}

const userSlice = createSlice({
  name: 'users',
  initialState: {
    userState: {
      username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    },
    usersState: {},
    type: '',
    keyword: '',
    params: {}
  },
  reducers: {},
  extraReducers: {
    [joinPage.fulfilled]: ( state, action ) => { state.userState = action.payload },
    [detailPage.fulfilled]: ( state, {meta, payload} ) => { state.userState = payload },
    [listPage.fulfilled]: ( state, {meta, payload} ) => { 
      state.userState = payload
    },
    [loginPage.fulfilled]: ( state, {meta, payload} ) => {
      state.userState = payload
        //window는 윈도우 브라우저 창을 말한다. (JSX)
      window.localStorage.setItem('sessionUser', JSON.stringify(payload))
    },
    [modifyPage.fulfilled]: ( state, action ) => { 
      state.userState = action.payload 
      window.localStorage.setItem('sessionUser', JSON.stringify(action.payload))
      window.location.href='/home'
    },
    [removePage.fulfilled]: () => { 
      // state.userState = payload
      window.location.href='/'
      window.localStorage.clear()
    }
  }

})
export const currentUserState = state => state.users.userState
export const currentUsersState = state => state.users.usersState
export const currentUserParam = state => state.users.param
export default userSlice.reducer;

