import React, { useState, useCallback } from 'react';
import { useHistory  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { joinPage } from 'features/user/reducer/userSlice'
import { useForm } from "react-hook-form";
import styled from 'styled-components'
import { Layout } from 'features/common';

export default function UserAdd() {
    const history = useHistory()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    // https://react-hook-form.com/kr/advanced-usage/
    const [join, setJoin] = useState({
        username:'', password:'', email:'', name:'', regDate: new Date().toLocaleDateString()
    })

    const {username, password, email, name} = join
    const handleChange = useCallback((e)=> {
        const { value, name } = e.target
        setJoin({
            ...join,
            [name] : value
        })
    }, [join]) 
    
    const onSubmit = async () => {
        await dispatch(joinPage( {
            'username': join.username,
            'password': join.password,
            'email': join.email,
            'name': join.name,
            'regDate': join.regDate
        }))
        alert(`${join.username} 회원가입 환영`)
        history.push('/users/login')
  }

  return (<Layout>
    <div>
         <h1>회원 가입</h1>
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
        <ul>
            <li>
                <label>아이디 : </label>
                    {/* use aria-invalid to indicate field contain error */}
                <input type="text" id="username" 
                    {...register('username', { required: true, maxLength: 30 })}
                    name="username" value={username} onChange={handleChange}
                    size="10" minlength="4" maxlength="15"/>
                    {/* use role="alert" to announce the error message */}
                    {errors.username && errors.username.type === "required" && (
                        <Span role="alert">아이디는 필수값입니다</Span>
                    )}
                    {errors.username && errors.username.type === "maxLength" && (
                        <Span role="alert">아이디는 4자에서 15 글자이어야 합니다.</Span>
                    )}
                <br/>
                <small>4~15자리 이내의 영문과 숫자</small>
            </li>
            <li>
                <label> 이메일 : </label>
                <input type="email" id="email" 
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register('email', { required: true, maxLength: 30 })}
                    name="email" value={email} onChange={handleChange}
                    size="10" minlength="4" maxlength="15"/>
                {/* use role="alert" to announce the error message */}
                {errors.email && errors.email.type === "required" && (
                    <Span role="alert">아이디는 필수값입니다</Span>
                )}
                {errors.email && errors.email.type === "maxLength" && (
                    <Span role="alert">아이디는 4자에서 15 글자이어야 합니다.</Span>
                )}
            </li>
            <li>
                <label>비밀 번호 : </label>
                <input type="password" id="password" 
                    aria-invalid={errors.password ? "true" : "false"}
                    {...register('password', { required: true, maxLength: 30 })}
                    name="password" value={password} onChange={handleChange}
                    size="10" minlength="1" maxlength="15"/>
                {errors.password && errors.password.type === "required" && (
                    <Span role="alert">비밀 번호는 필수값입니다</Span>
                )}
                {errors.password && errors.password.type === "maxLength" && (
                    <Span role="alert">비밀 번호는 1자에서 15 글자이어야 합니다.</Span>
                )}
            </li>
            <li>
                <label> 이름 : </label>
                <input type="text" id="name" 
                    aria-invalid={errors.name ? "true" : "false"}
                    {...register('name', { required: true, maxLength: 30 })}
                    name="name" value={name} onChange={handleChange}
                    size="10" minlength="4" maxlength="15"/>
                {errors.name && errors.name.type === "required" && (
                    <Span role="alert">이름은 필수값입니다</Span>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                    <Span role="alert">이름은 4자에서 15 글자이어야 합니다.</Span>
                )}
            </li>
        </ul>
        <input type="submit" value="회원가입"/> 
    </form>
    </div></Layout>
  );
}
const Span = styled.span`
    color: red
`

