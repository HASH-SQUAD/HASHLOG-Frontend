import styled from "styled-components";

export const Write_Layout = styled.div`
  width: 100%;
  height: 100%;
`

export const Write_Line = styled.div `
  width: 100%;
  border-bottom: 1.5px solid #eeeeee;;
`

export const Write_Write = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 100%;
  float: left;
  flex-direction: column;
`;


export const Write_TitleInput = styled.textarea `
  width: 90%;
  border-style: none;
  outline: none;
  padding: 30px 0 20px 20px;
  font-size: 3rem;
  resize: none;
  word-spacing:-20px;

`
export const Write_View = styled.div`
  width: 50vw;
  background-color: #F5F5F5;
  float: right;
`