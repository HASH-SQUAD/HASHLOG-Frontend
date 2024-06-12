// style.js
import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Header_Container = styled.div`
    width: 100vw;
    height: 55px;
    display: flex;
    align-items: center;
    background-color: #fff;
    justify-content: space-between;
    padding: 0px 200px;
    h1 {
        line-height: normal;
        color: #000;
        font-family: Pretendard;
        font-size: 48px;
        font-style: normal;
        font-weight: 900;
    }
`;

export const Header_button = styled.button`
    width: 4.8vw;
    height: 4.2vh;
    background-color: ${(props) => props.backgroundColor || '#000'};;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    border-style: none;
    color: ${(props)=> props.color || '#fff'};
`;

export const StyledRouterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

