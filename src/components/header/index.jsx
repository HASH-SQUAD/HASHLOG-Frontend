import React, { useState } from "react";
import * as _ from "./style";

const Header = () => {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <_.Header_Container>
      <h1>#</h1>
      {isLogined ? <_.Header_button>글쓰기</_.Header_button> : <></>}
    </_.Header_Container>
  );
};

export default Header;
