import React, { useState } from "react";
import * as _ from "./style";
import Logo from "../../assets/hashlogo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
	const history = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
	const onSubmit = () => {
    axios
      .post("http://10.150.150.193:3000/auth/signin", {
        userid: userId,
        password: userPassword,
      })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        localStorage.setItem("refreshToken", res.data.refreshToken);
        alert(res.data.message);
        history("/");
        window.location.reload();
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
      <_.SiginIn_ID_Input placeholder="아이디를 입력해주세요" type="text" />
      <_.SiginIn_PW_Input
        placeholder="비밀번호를 입력해주세요"
        type="password"
      />
      <_.SiginIn_EMAIL_Input placeholder="이메일을 입력해주세요" type="email" />
      <_.SiginIn_NICKNAME_Input
        placeholder="닉네임을 입력해주세요"
        type="text"
      />
      <_.SigIn_Button>회원가입</_.SigIn_Button>
      <_.SignIn_NO_Exist>
        이미 회원이신가요?
        <span
          onClick={() => {
            history("/auth/signin");
          }}
        >
          로그인
        </span>
      </_.SignIn_NO_Exist>
    </_.SignIn_Container>
  );
};

export default SignUp;
