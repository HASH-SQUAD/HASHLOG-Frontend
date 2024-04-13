import React from 'react';
import * as _ from './style';
import Logo from '../../assets/hashlogo.png';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const history = useNavigate();
	return (
		<_.SignIn_Container>
			<img src={Logo} style={{ width: "80px", height: "auto", borderRadius:'10px' }} alt='Logo' />
			<_.SiginIn_ID_Input
				placeholder='아이디를 입력해주세요'
				type='text'
			/>
			<_.SiginIn_PW_Input
				placeholder='비밀번호를 입력해주세요'
				type='password'
			/>
			<_.SiginIn_EMAIL_Input
				placeholder='이메일을 입력해주세요'
				type='email'
			/>
			<_.SiginIn_NICKNAME_Input
				placeholder='닉네임을 입력해주세요'
				type='text'
			/>
			<_.SigIn_Button>회원가입</_.SigIn_Button>
			<_.SignIn_NO_Exist>
				이미 회원이신가요?
				<p onClick={() =>history('/auth/signin')}>로그인</p>
			</_.SignIn_NO_Exist>
		</_.SignIn_Container>
	);
};

export default SignUp;
