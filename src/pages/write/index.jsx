import React from "react";
import Header from "../../components/header";
import { useState } from "react";
import * as _ from "./style";

const Write = () => {
  const [userName, setUserName] = useState("강민지님");

  return (
    <>
        <Header userName={userName} />
        <_.Write_Layout>
            <_.Write_Line/>
      </_.Write_Layout>
    </>
  );
};

export default Write;
