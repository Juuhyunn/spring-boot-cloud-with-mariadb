import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { removePage } from '../reducer/userSlice';


export function UserRemove() {
  const sessionUser = JSON.parse(localStorage.getItem('sessionUser'))
  const history = useHistory()
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  
  return (
    <div>
      <h1>회원 탈퇴</h1>
      <form method='DELETE' onSubmit={
        useCallback( e => { sessionUser.password === password?
          dispatch(removePage(sessionUser.userId)):
          alert('비밀번호가 틀렸습니다.')
          document.getElementById('password').value = ''
        })
      }>
          <ul>
          <li>
              <label>
                    <span>사용자 번호 : {sessionUser.userId} </span>
                </label>
            </li>
            <li>
                <label>
                    <span>사용자 아이디 : {sessionUser.username} </span>
                </label>
            </li>
          <li><label for="pw">비밀번호</label>
          <input type="password" id="password" name="password" onChange={e => setPassword(e.target.value)}/></li>
          <li><input type="submit" value="탈퇴 요청"/></li>
          <li><input type="button" value="탈퇴 취소" onClick={ e => history.push('/users/detail')}/></li>
          </ul>
      </form>
    </div>
  );
}
