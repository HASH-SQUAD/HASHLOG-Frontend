import React from "react";
import * as _ from "./style";

const Content = ({ img, date, title, desc }) => {
  return (
    <div>
      <_.Content_Container>
        <img src={img}></img>
        <_.Content_Date>{date}</_.Content_Date>
        <_.Content_Title>{title}</_.Content_Title>
        <_.Content_desc>{desc}</_.Content_desc>
        
      </_.Content_Container>
    </div>
  );
};

export default Content;
