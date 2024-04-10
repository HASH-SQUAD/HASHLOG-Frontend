import React from 'react'
import * as _ from './style';

const Footer = () => {
  return (
    <_.Footer_Layout>    
        <_.Footer_Container>
            <_.Footer_Logo>#ASH</_.Footer_Logo>
            <_.Footer_Addition>BSSM 1st #HASH TEAM</_.Footer_Addition>
            <_.Footer_PolicyText>이용약관 | 개인정보처리방침</_.Footer_PolicyText>
            <_.Footer_Line></_.Footer_Line>
            <_.Footer_Address>(주) #ASH  |  대표 : 이승현  | 부산광역시 강서구 가락대로 1393</_.Footer_Address>
            <_.Footer_InfoText>개인정보책임관리자 : 강민지  | 비즈니스 문의 : ha.sh02@gmail.com | #ASH 사이트에 대한 모든 콘텐츠, 정보, UI, HTML 소스 등에 대한 무단 복제, 전송, 배포, 크롤링, 스크래핑 등의 행위를 거부하며, 이러한 행위는 관련 법령에 의해 엄격히 금지됩니다.</_.Footer_InfoText>
            <_.Footer_Copyright>©2024. team #ASH. All rights reserved.</_.Footer_Copyright>

        </_.Footer_Container>
    </_.Footer_Layout>
  )
}

export default Footer
