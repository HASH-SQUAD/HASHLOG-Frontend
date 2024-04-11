import styled from 'styled-components';

export const SignIn_Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
  padding: 25vh 0 0 0;
`;

export const SiginIn_ID_Input = styled.input`
	width: 37vw;
	height: 7vh;
	font-size: 14px;
	font-family: 'Pretendard-Thin';
	text-indent: 6px;
	margin-bottom: 4px;
  margin-top: 15px;
  border-style: none;
  padding: 0 0 0 10px;
  border-radius: 0.3125rem;
  border: 1px solid #666;
`;

export const SiginIn_PW_Input = styled.input`
width: 37vw;
	height: 7vh;
	font-size: 14px;
	font-family: 'Pretendard-Thin';
	text-indent: 6px;
	margin-bottom: 2px;
  border-style: none;
  padding: 0 0 0 10px;
  border-radius: 0.3125rem;
  border: 1px solid #666;
`;

export const SigIn_Button = styled.button`
	width: 37vw;
	height: 7vh;
  font-size: 1.1rem;
	font-family: 'Pretendard';
	background-color: black;
  border-radius: 3px;
	color: white;
	cursor: pointer;
`;

export const SignIn_NO_Exist = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4px;
	cursor: pointer;
	font-size: 12px;
	font-family: 'Pretendard-Light';
  margin-top: 3px;

	p {
		font-size: 12px;
		font-family: 'Pretendard-SemiBold';
	}
`;
