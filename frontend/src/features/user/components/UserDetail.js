import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

export function UserDetail() {
    const history = useHistory()
    const [detail, setDetail] = useState({
        userId:'', username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    })
    const userDetail = () => {
        const sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
        userDetail(sessionUser)
        .then(res => {
            alert(`회원 정보 조회 성공 : ${res.data}`)
            setDetail(res.data)

        })
        .catch(err => {
            alert(`회원 정보 조회 실패 : ${err}`)
        })
    }
    // useEffect는 들어오자마자 데이터가 없어도 실행하라는 뜻
    useEffect(() => {
        userDetail()
    }, []) 
    const logout = e => {
        e.preventDefault()
        localStorage.setItem('sessionUser', '')
        history.push('users/list')
    }
    return (
        <div>
        <h1>회원정보</h1>
    
        <ul>
            <li>
                <label>
                    <span>회원번호 : {detail.userId} </span>
                </label>
                
            </li>
            <li>
                <label>
                    <span>아이디 : {detail.username} </span>
                </label>
                
            </li>
            <li>
                <label>
                <span>이메일 :  {detail.email}  </span>
                </label>
            </li>
            <li>
                <label>
                    <span>비밀 번호 :  *******  </span>
                </label>
            </li>
            <li>
                <label>
                <span>이름 : {detail.name} </span>
                </label>
            </li>
            <li>
                <input type="button" value="회원정보수정" onClick={() => history.push("/users/modify")}/>
                <input type="button" value="로그아웃" onClick={logout}/>
            </li>

        </ul>
   
    </div>
      );
}
