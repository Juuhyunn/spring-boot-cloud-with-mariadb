import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { detailPage } from 'features/user/reducer/userSlice'
import { useHistory } from 'react-router';
import { Logout } from 'features/user/index'
import { Layout } from 'features/common';



export function UserDetail() {
    const detail = JSON.parse(localStorage.getItem('sessionUser'));
    const history = useHistory()
    return (<Layout>
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
                <input type="button" value="회원정보수정" onClick={()=> history.push('/users/modify') }/>
            </li>
            <li>
                <Logout/>
            </li>

        </ul>
   
    </div></Layout>
      );
}
