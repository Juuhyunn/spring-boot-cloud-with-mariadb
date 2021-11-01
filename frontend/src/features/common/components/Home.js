import { Logout } from 'features/user'
import React from 'react'

export function Home() {
  return(<>
  <div>
    {localStorage.length == 0 ?
    <><button onClick={() => window.location.href='/users/add'}>회원가입</button>
    <button onClick={() => window.location.href='/users/login'}>로그인</button></>
    :
    <><h1>{JSON.parse(window.localStorage.getItem('sessionUser')).name}님 접속 중</h1><Logout/></>}</div>
  <div>
    <h1>시간이란...</h1>
    <p>내일 죽을 것처럼 오늘을 살고
        영원히 살 것처럼 내일을 꿈꾸어라.
    </p>
  </div></>)}