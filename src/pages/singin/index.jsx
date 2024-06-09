import React, { useEffect, useState } from 'react';
import * as _ from './style';
import Logo from '../../assets/hashlogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const history = useNavigate();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const onSubmit = () => {
    axios
      .get("http://10.150.150.193:3000/auth/signin", {
        userid: userId,
        password: userPassword,
      })
      .then((res) => {
        console.log(res);
        history("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <_.SignIn_Container>
      <img
        src={Logo}
        style={{ width: "80px", height: "auto", borderRadius: "10px" }}
        alt="Logo"
      />
      <_.SiginIn_ID_Input
        type="text"
        onChange={(e) => {
          setUserId(e.currentTarget.value);
        }}
        placeholder="아이디를 입력해주세요"
      />
      <_.SiginIn_PW_Input
        type="password"
        onChange={(e) => {
          setUserPassword(e.currentTarget.value);
        }}
        placeholder="비밀번호를 입력해주세요"
      />

      <_.SigIn_Button onClick={onSubmit}>로그인</_.SigIn_Button>

      <_.SignIn_NO_Exist>
        회원이 아니신가요?
        <span>회원가입</span>
      </_.SignIn_NO_Exist>
    </_.SignIn_Container>
  );
};

export default SignIn;
