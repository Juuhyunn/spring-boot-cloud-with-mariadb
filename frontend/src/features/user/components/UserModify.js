import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export function UserModify() {
  const history = useHistory()
  const sessionUser = JSON.parse(localStorage.getItem('sessionUser'));
  const [modify, setModify] = useState({
    userId: sessionUser.userId,
    username: sessionUser.username, 
    password: sessionUser.password, 
    email: sessionUser.email, 
    name: sessionUser.name, 
    regDate: sessionUser.regDate
  })
  const { username, password, email, name } = modify
  const handleChange = e => {
    e.preventDefault()
    const { value, name } = e.target
    setModify( {
      ...modify,
      [name] : value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const modifyRequest = { ...modify }
    UserModify(modifyRequest)
    .then(res => {
      alert(`수정 성공 : ${res}`)
      history.push('/users/detail')
    })
    .catch(err => {
      alert(`수정 실패 : ${err}`)
    })

  }
  return (<>
    <div>
         <h1>회원정보 수정</h1>
    <form onSubmit={handleSubmit} method='POST'>
        <ul>
            <li>
              <label>
                    <span>회원번호 : {sessionUser.userId} </span>
                </label>
            </li>
            <li>
                <label>
                    <span>아이디 : {sessionUser.username} </span>
                </label>
            </li>
            <li>
                <label>
                    이메일 : <input type="text" id="email" name="email" placeholder={sessionUser.email}
                                 onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    비밀 번호 : <input type="text" id="password" name="password" placeholder={sessionUser.password} onChange={handleChange}/>
                </label>
            </li>
            <li>
                <label>
                    이름 : <input type="text" id="name" name="name" placeholder={sessionUser.name} onChange={handleChange}/>
                </label>
            </li>
           
            <li>
                <input type="submit" value="수정확인"/>
            </li>

        </ul>
    </form>
    </div>
  </>);
}
