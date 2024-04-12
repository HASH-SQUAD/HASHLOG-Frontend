import React from 'react';
import * as _ from './style';
import Logo from '../../assets/hashlogo.png';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	const history = useNavigate();
	return (
		<_.SignIn_Container>
			<img src={Logo} style={{ width: "80px", height: "auto", borderRadius:'10px' }} alt='Logo' />
			<_.SiginIn_ID_Input placeholder='아이디를 입력해주세요' />
			<_.SiginIn_PW_Input placeholder='비밀번호를 입력해주세요' />

			<_.SigIn_Button>로그인</_.SigIn_Button>

			<_.SignIn_NO_Exist>
				회원이 아니신가요?
				<p onClick={() => history('/signup')}>회원가입</p>
			</_.SignIn_NO_Exist>
		</_.SignIn_Container>
	);
};

export default SignIn;

