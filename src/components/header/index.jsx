import React, { useState } from "react";
import * as _ from "./style";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <_.Header_Container>
      <Link to="/"><h1>#</h1></Link>
        userName ? (
          <>
          <_.Header_button>유저내임드드</_.Header_button>
          <_.Header_button><Link to="/write">글쓰기</Link></_.Header_button>
          </>
      ) : (
        <_.Header_button backgroundColor="#fff" color="#696969" onClick={() => navigate('/auth/signin')}>
          로그인</_.Header_button>
          )
      </_.Header_Container>
  );
};

export default Header;