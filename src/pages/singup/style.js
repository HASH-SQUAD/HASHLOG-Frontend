import styled from 'styled-components';

export const SignIn_Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 24vh;
	gap: 10px;
`;

export const SiginIn_ID_Input = styled.input`
	width: 378px;
	height: 40px;
	font-size: 14px;
	font-family: 'Pretendard-Thin';
	text-indent: 6px;
  padding: 0 0 0 10px;
  border-radius: 0.3125rem;
  border: 1px solid #666;
  margin-top: 15px;
`;

export const SiginIn_PW_Input = styled.input`
	width: 378px;
	height: 40px;
	font-size: 14px;
	font-family: 'Pretendard-Thin';
	text-indent: 6px;
	padding: 0 0 0 10px;
  border-radius: 0.3125rem;
  border: 1px solid #666;
`;

export const SiginIn_EMAIL_Input = styled.input`
	width: 378px;
	height: 40px;
	font-size: 14px;
	font-family: 'Pretendard-Thin';
	text-indent: 6px;  
	padding: 0 0 0 10px;
  border-radius: 0.3125rem;
  border: 1px solid #666;
`;

export const SiginIn_NICKNAME_Input = styled.input`
	width: 378px;
	height: 40px;
	font-size: 14px;
	font-family: 'Pretendard-Thin';
	text-indent: 6px;  
	padding: 0 0 0 10px;
  border-radius: 0.3125rem;
  border: 1px solid #666;
	margin-bottom: 2px;
`;

export const SigIn_Button = styled.button`
	width: 378px;
	height: 40px;
	font-size: 16px;
	font-family: 'Pretendard';
	background-color: black;
	color: white;
	cursor: pointer;
  border-radius: 3px;
`;

export const SignIn_NO_Exist = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
	cursor: pointer;
	font-size: 12px;
	font-family: 'Pretendard-Light';
	margin-top: 10px;

	span {
		font-size: 12px;
		font-family: 'Pretendard-SemiBold';
	}
`;
