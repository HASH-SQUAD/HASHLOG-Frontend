import React from "react";
import Header from "../../components/header";
import { useState } from "react";
import * as _ from "./style";
import "./style.css";
import ReactQuill from "react-quill";

const Write = () => {
  const [userName, setUserName] = useState("강민지님");
  const [title, setTitle] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const formats = [
    "font",
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "align",
    "color",
    "background",
    "size",
    "h1",
  ];
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        [
          "font",
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "blockquote",
          "list",
          "bullet",
          "indent",
          "link",
          "align",
          "color",
          "background",
          "size",
          "h1",
        ],
      ],
    },
  };
  return (
    <>
      <Header userName={userName} />
      <_.Write_Line />
      <_.Write_Layout>
        <_.Write_Write>
          <_.Write_TitleInput
            type="text"
            value={title}
            maxLength="50"
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
          />
          <ReactQuill
            style={{ width: "100%", height: "calc(100% - 100px)" }}
            modules={modules}
          />
          <_.Write_FooterLayout>
            <_.Write_Footer>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 56 56" fill="none">
  <path d="M34.4029 13.761L20.6416 27.5223L34.4029 41.2835" stroke="#33363F" stroke-width="4.58709"/>
</svg>
<_.Write_WriteButton>글쓰기</_.Write_WriteButton>

            </_.Write_Footer>
          </_.Write_FooterLayout>
        </_.Write_Write>
        <_.Write_View></_.Write_View>
      </_.Write_Layout>
    </>
  );
};

export default Write;
