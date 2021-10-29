import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { loginPage } from 'features/user/reducer/userSlice'


export function UserLogin() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [login, setLogin] = useState({})
  const {username, password} = login
  const handleChange = e => {
    const {value, name} = e.target
    setLogin({...login, [name]: value})
  }
  const handleClick = async e => {
    e.preventDefault()
    e.stopPropagation()
    const loginRequest = {username, password}
    await dispatch(loginPage(loginRequest))
    const loginUser = JSON.parse(localStorage.getItem('sessionUser'))
    if(loginUser.username != null){
      alert(`${loginUser.name}님 환영합니다`)
      history.push("/users/detail")
    }else{
      alert('아이디, 비번 오류로 로그인 실패  ')
      changeNull(['username','password'])
    }    // UserLogin(loginRequest)
    // .then(res => {
    //   const user = res.data
    //   if(user.userId != 0) {
    //   alert('로그인 성공 : ' + user.userId)
    //   localStorage.setItem('sessionUser', JSON.stringify(user))
    //   history.push('/users/detail')
    //   }else{
    //   alert('로그인 실패 : 아이디 또는 비밀번호를 확인해주세요.')
    //   document.getElementById('username').value = ''
    //   document.getElementById('password').value = ''
    // }
      
    // })
    // .catch(err => {
    //   alert('접속 실패 : ' + err)
    //   document.getElementById('username').value = ''
    //   document.getElementById('password').value = ''
    // })
  }
  const changeNull = ls =>{
    for(const i of ls ){
      document.getElementById(i).value = ''
    }
  }
  return (
    <div>
      <h1>사용자 로그인</h1>
      <form method="POST">
          <ul>
          <li><label for="id">아이디</label>
          <input type="text" id="username" 
              name='username' value={username} onChange={handleChange}/></li>
          <li><label for="pw">비밀번호</label>
          <input type="password" id="password" name="password" onChange={handleChange}/></li>
          <li><input type="button" title="로그인" value="로그인" onClick={handleClick}/></li>
          </ul>
      </form>
    </div>
  );
}
