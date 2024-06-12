import React, { useState } from "react";
import React, { useState } from "react";
import * as _ from "./style";
import { Link, useNavigate } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Header = ({userName}) => {
  const [isLogined, setIsLogined] = useState(false);
  const history = useNavigate()
  return (
    <_.Header_Container>
      <Link to="/"><h1>#</h1></Link>
      {isLogined ? (
        userName ? (
          <_.Header_button>{userName}</_.Header_button>
        ) : (
          <_.Header_button><Link to="/write">글쓰기</Link></_.Header_button>
        )
      ) : 
        <_.Header_button backgroundColor="#fff" color="#696969" onClick={() => navigate('/auth/signin')}>
          로그인</_.Header_button>
        }
      </_.Header_Container>
  );
};

export default Header;