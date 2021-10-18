import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation(){
    
    return(
    <nav class="navi">
        <ul>
            <li><Link to='/home'>홈</Link></li>
            <li><Link to='/add'>사용자 추가</Link></li>
            <li><Link to='/detail'>사용자 세부 사항</Link></li>
            <li><Link to='/list'>사용자 목록</Link></li>
            <li><Link to='/login'>사용자 로그인</Link></li>
            <li><Link to='/modify'>사용자 수정</Link></li>
            <li><Link to='/remove'>사용자 삭제</Link></li>
        </ul>
    </nav>)
}