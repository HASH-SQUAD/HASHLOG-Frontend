
import styled from "styled-components";

export const Write_Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

export const Write_Line = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #eeeeee;
`;

export const Write_Write = styled.div`
  /* overflow: scroll; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  float: left;
  flex-direction: column;
`;

export const Write_TitleInput = styled.textarea`
  width: 90%;
  border-style: none;
  outline: none;
  padding: 30px 0 0 20px;
  font-size: 3rem;
  resize: none;
  font-family: 'Pretendard-semibold';
`;

export const Write_TitleLine = styled.div`
  width: 100%;
  border-bottom: 1.5px solid #eeeeee;
  border-top: 20px solid #fff;
`

export const Write_View = styled.div`
  background-color: #f5f5f5;
  float: right;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
  overflow: auto;
  float: left;
  flex-direction: column;
  justify-content: flex-start;

`;

export const Write_FooterLayout = styled.div `
  width: 100%;
  height: 100px;
`

export const Write_Footer = styled.div`
  width: 50%;
  height: 80px;
  box-shadow: #d9d9d9 0px 0px 8px 0;
  bottom: 0px;
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

`;

export const Write_WriteButton = styled.button`
  width: 4.8vw;
  height: 4.2vh;
  background-color: #000;
  color: #fff;
  border-radius: 5px;
  border-style: none;

`
export const Write_ViewTitle = styled.div `
  width: 90%;
  border-style: none;
  outline: none;
  padding: 30px 30px 0 30px;
  font-size: 3rem;
  resize: none;
  font-family: 'Pretendard-semibold';
`

export const Write_ViewContent = styled.div `
  font-family: 'Pretendard';
  width: 90%;
  word-wrap: break-word;
  text-align: start;
  padding: 30px 30px 0 30px;
  line-height: 20px;
  h1 {
    margin-top: 6px;
    margin-bottom:6px;
    line-height: 50px;
    font-size: 2.5rem;
  }
  h2 {
    margin-top: 6px;
    margin-bottom:8px;
    line-height: 35px;
    font-size: 2rem;
  }
  h3 {
    margin-top: 6px;
    margin-bottom:8px;
    line-height: 25px;
    font-size: 1.5rem;
  }
  h4 {
    font-size: 1rem;
  }
  p {
    font-size: 1.25rem;
  }
`