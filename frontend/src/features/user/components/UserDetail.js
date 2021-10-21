import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export function UserDetail() {
    const SERVER = 'http://localhost:8080'
    const history = useHistory()
    const [detail, setDetail] = useState()
    const fetchOne = () => {
        const sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
        alert('사용자 아이디 : ' + sessionUser.userId)
        axios.get(`${SERVER}/users/${sessionUser.userId}`)
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
        fetchOne()
    }, []) 

    
    return (
        <div>
             <h1>회원 정보</h1>
            <ul>
                <li>
                    <label>
                        <span>아이디 : </span>
                    </label>
                </li>
                <li>
                    <label>
                        <span>이메일 : </span>
                    </label>
                </li>
                <li>
                    <label>
                        <span>비밀번호 : ******* </span>
                    </label>
                </li>
                <li>
                    <label>
                        <span>이름 : </span>
                    </label>
                </li>
                <li>
                    <input type="submit" value="회원가입"/>
                </li>
    
            </ul>
        </div>
      );
}
