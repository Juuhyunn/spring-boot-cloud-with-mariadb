import React from "react";

const UserListForm = ({list}) => {
    return (<>
    <table>
    <thead>
        <tr>
            <td>사용자 번호</td>
            <td>사용자 아이디</td>
            <td>사용자 이름</td>
            <td>사용자 이메일</td>
        </tr>   
    </thead>
    <tbody>
        {list.map((user) => (
            <tr>
                <td>{user.userId}</td>
                <td>{user.username}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        ))}
    </tbody>
    </table>
    </>)
}
export default UserListForm