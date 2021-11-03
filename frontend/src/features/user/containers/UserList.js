import React, { useEffect, useState } from 'react';
import { UserListForm } from 'features/user/index';
import { useDispatch, useSelector } from 'react-redux';
import { listPage } from 'features/user/reducer/userSlice'


export function UserList() {
  const [list, setList] = useState(useSelector(state => state.userReducer.userState))
  const dispatch = useDispatch()
  const users = useSelector(state => state.userReducer.userState);
  useEffect(() => {
    dispatch(listPage())
  }, [])
  return (<>
    <div>
      <h1>사용자 목록</h1>
      <table border='1px' style={{textAlign:'center'}}>
        <thead>
            <tr>
                <th>사용자 번호</th>
                <th>사용자 아이디</th>
                <th>사용자 이름</th>
                <th>사용자 이메일</th>
            </tr>   
        </thead>
        <tbody>
        {users.map((user) => (
            <tr>
              <td>{user.userId}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  </>);
}
