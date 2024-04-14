import React from "react";
import Header from "../../components/header";
import { useState } from "react";
import * as _ from "./style";

const Write = () => {
  const [userName, setUserName] = useState("강민지님");

  return (
    <>
      <ReactQuill />
        <Header userName={userName} />
        <_.Write_Layout>
            <_.Write_Line/>
            <_.Write_Write>
            <_.Write_TitleInput placeholder="제목을 입력하세요" />

            </_.Write_Write>
        </_.Write_Layout>
    </>
  );
};

export default Write;
