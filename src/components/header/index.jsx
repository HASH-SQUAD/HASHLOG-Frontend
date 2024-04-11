import React, { useState } from "react";
import * as _ from "./style";
import { Link } from "react-router-dom";

const Header = ({userName}) => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <_.Header_Container>
      <h1>#</h1>
      {isLogined ? (
        userName ? (
          <_.Header_button>{userName}</_.Header_button>
        ) : (
          <_.Header_button><Link to="/write">글쓰기</Link></_.Header_button>
        )
      ) : (
        <_.Header_button backgroundColor="#fff" color="#696969">로그인</_.Header_button>
      )}
      </_.Header_Container>
  );
};

export default Header;