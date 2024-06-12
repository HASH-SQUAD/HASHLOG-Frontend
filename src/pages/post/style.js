import styled from "styled-components";

export const Post_Layout = styled.div `
  overflow: auto;
  width: 100vw;
  background-color: #FBFBFD;
  padding: 0 200px 150px 200px;
  margin: 0;
`

export const Post_Title = styled.div `
  margin-top: 8%;
  color: #12182B;
  font-size: 2.5rem;
  font-weight: 600;
  width: 100%;
  border-style: none;
  outline: none;
`
export const Post_Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 1%;
`


export const Post_Tag = styled.div`
  padding: 0.75% 1.25%;
  width: 6.5%;
  font-size: 0.8rem;
  text-align: center;
  color: #7A7D85;
  background-color: #eee;
  border-radius: 20px;
  border: none;

`;


export const Post_Date = styled.div `
  color: #7A7D85;
  font-size: 0.8rem;
  margin-left: 5px;
`
export const Post_Title_Line = styled.div `
  width: 100%;
  height: 1px;
  background-color:#d9d9d9;
  margin-top: 2%;
  `
  export const Post_Img_Layout = styled.div `
    display: flex;
    justify-content: center;
  `
    
      export const Post_Img = styled.img `
      width: 80%;
      height: 300px;
      margin-top: 4%;
      border-radius: 20px;
      display: block;
    `
  export const Post_Content = styled.div`
    margin-top: 4%;
    color: #12182b;
    font-size: 1rem;
    line-height: 1.6;
    white-space: pre-wrap;
  `

  export const Post_Content_Layout = styled.div `
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
  `
  export const Post_Share_Button = styled.button `
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #000;
    width: 14vw;
    height: 8vh;
    font-size: 18px;
    color: #fff;  
    gap: 2px;
    margin-top: 50px;
  `
  export const Post_Share_Icon = styled.img `
    background: #000;
    width: 26px;
  `
  export const Post_Share_Success = styled.img `
    background: #FFF;
    width: 20vw;
    height: 8vh;
  `




