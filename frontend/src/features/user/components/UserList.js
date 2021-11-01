import React, { useEffect, useState } from 'react';
import { UserListForm } from 'features/user/index';
import { useDispatch } from 'react-redux';
import { listPage } from 'features/user/reducer/userSlice'


export function UserList() {
  const [list, setList] = useState([{}])
  
  const userList = () => {
    userList()
      .then(res => setList(res.data) )
      .catch(err => console.log(err))
  }

  useEffect(() => {
    userList()
  }, [])
  return (<>
    <div>
      <h1>사용자 목록</h1>
      <UserListForm list = {list}/>
    </div>
  </>);
}
