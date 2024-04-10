import styled from 'styled-components'

export const Content_Container = styled.div`
  width: 16vw;
  height: 30vh;
  border-radius: 15px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2vh 0 0 0;

  img {
    width: 14.5vw;
    height: 50%;
    margin: 0 auto 0 auto;
    object-fit: cover;
    border-radius: inherit;
  }
`


export const Content_Date = styled.div`
  width: 14.5vw;
  color: #696969;
  font-size: 12px;
  font-family: pretendard;
  display: flex;
  padding-top: 0.8vh;
`

export const Content_Title = styled.div`
  width: 14.5vw;
  color: #12182B;
  font-family: Pretendard;
  font-size: 1.2em;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

`

export const Content_desc = styled.div `
  width: 14.5vw;
  color: #54575F;
  font-family: Pretendard;
  font-size: 0.9em;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

`