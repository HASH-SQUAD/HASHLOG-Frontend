import React, { useMemo } from "react";
import Header from "../../components/header";
import { useState } from "react";
import * as _ from "./style.js";
import "./style.css";
import ReactQuill from "react-quill";
import back from '../../assets/back.svg'

const Write = () => {
  const [userName, setUserName] = useState("강민지님");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const handleContentChange = (e) => {
    setContent(e);
  };
  
  const modules = useMemo(() => {
    return {
        toolbar: {
            container: [
                [
                    { header: '1' },
                    { header: '2' },
                    { header: '3' },
                    { header: '4' },
                ],
                [
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    'blockquote',
                    'code-block',
                ],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
            ],

        },
    };
}, []);

const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'code-block',
    'image',
    'link',
    'ordered',
    'bullet',
];

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
          <_.Write_TitleLine/>
          <ReactQuill
            style={{ width: "100%", height: "calc(100% - 100px)" }}
            modules={modules}
            formats={formats}
            onChange={handleContentChange}
            value={content}
          />
          <_.Write_FooterLayout>
            <_.Write_Footer>
            <img src={back}/>
  <_.Write_WriteButton>업로드</_.Write_WriteButton>
            </_.Write_Footer>
          </_.Write_FooterLayout>
        </_.Write_Write>
        <_.Write_View></_.Write_View>
      </_.Write_Layout>
    </>
  );
};

export default Write;
