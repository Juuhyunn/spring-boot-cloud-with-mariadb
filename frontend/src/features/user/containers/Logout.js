import React from "react";
import { useHistory } from "react-router";

export const Logout = () => {
    const history = useHistory()
    return(<>
    <button onClick = {e => {
        e.preventDefault()
        e.stopPropagation()
        localStorage.clear(e)
        history.push('/home')
    }}> 로그아웃 </button>
</>)}