import React, { useEffect, useState } from 'react';
import * as _ from './style';
import Logo from '../../assets/hashlogo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

const SignIn = () => {
	const [userId,setUserID] = useState("");
	const [userPassword,setUserPassword] = useState("");

	return (
		<_.SignIn_Container>
			<img src={Logo} style={{ width: "80px", height: "auto", borderRadius:'10px' }} alt='Logo' />
			<_.SiginIn_ID_Input placeholder='아이디를 입력해주세요' />
			<_.SiginIn_PW_Input placeholder='비밀번호를 입력해주세요' />

			<_.SigIn_Button>로그인</_.SigIn_Button>

			<_.SignIn_NO_Exist>
				회원이 아니신가요?
				<span onClick={() => navigate('/auth/signup')}>회원가입</span>
			</_.SignIn_NO_Exist>
		</_.SignIn_Container>
	);
};

export default SignIn;

