import React, { useState } from 'react';

export function UserLogin() {
  return (
    <div>
      <h1>사용자 로그인</h1>
      <form action="login.php" method="POST">
          <ul>
              <li><label for="id">아이디</label><input type="text" id="id"/></li>
              <li><label for="pw">비밀번호</label><input type="password" id="pw"/></li>
              <li><input type="submit" title="로그인" value="로그인"/></li>
          </ul>
      </form>
    </div>
  );
}
