import React from "react";
import Header from "../../components/header";
import { useState } from "react";
import * as _ from "./style";
import ReactQuill from "react-quill";

const Write = () => {
  const [userName, setUserName] = useState("강민지님");
  const [title, setTitle] = useState("")
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const formats = [
  'font',
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'color',
  'background',
  'size',
  'h1',
];
  const modules = {
    toolbar: {
      container: [
        ["image"],
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['font',
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'align',
        'color',
        'background',
        'size',
        'h1',],
      ],
    },
  };

  return (
    <>
        <Header userName={userName} />
        <_.Write_Layout>
            <_.Write_Line/>
            <_.Write_Write>
            <_.Write_TitleInput
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
          />
          <ReactQuill
            style={{ width: "100%", height: "100%" }}
            modules={modules}
          />
          </_.Write_Write>
        </_.Write_Layout>
    </>
  );
};

export default Write;
