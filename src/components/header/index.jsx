// Header.js
import React, { useState } from "react";
import * as _ from "./style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);
  const navigate = useNavigate();

  return (
    <_.Header_Container>
      <_.StyledRouterLink to="/">
        <h1>#</h1>
      </_.StyledRouterLink>
      {isLogined ? (
        <_.Header_button>유저내임드드</_.Header_button>
      ) : (
        <_.Header_button
          backgroundColor="#fff"
          color="#696969"
          onClick={() => navigate("/auth/signin")}
        >
          로그인
        </_.Header_button>
      )}
      {isLogined && (
        <_.Header_button>
          <_.StyledRouterLink to="/write">글쓰기</_.StyledRouterLink>
        </_.Header_button>
      )}
    </_.Header_Container>
  );
};

export default Header;
