import React, { useEffect, useState } from 'react';
import { UserListForm } from 'features/user/index';
import { useDispatch, useSelector } from 'react-redux';
import { listPage } from 'features/user/reducer/userSlice'


export function UserList() {
  const [list, setList] = useState([{}])
  const dispatch = useDispatch()
  const state = useSelector((state) => state.users)
  const userList = () => {
    userList()
      .then(res => setList(res.data) )
      .catch(err => console.log(err))
  }

  useEffect(() => {
  }, [])
  return (<>
    <div>
      <h1>사용자 목록</h1>
      <p>{}</p>
      {/* <UserListForm list = {state}/> */}
    </div>
  </>);
}
