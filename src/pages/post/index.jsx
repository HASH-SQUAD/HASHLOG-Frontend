import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import * as _ from "./style";
import img from "../../assets/Pinterest Image.jpg";

const Post = () => {
  const { title, date, tags, image } = {
    title: "해쉬브라운 먹고싶다",
    date: "2023.09.02",
    tags: ["일상", "사담"],
    image: { img },
  };
  return (
    <>
      <Header />
      <_.Post_Layout>
        <_.Post_Title>{title}</_.Post_Title>
        <_.Post_Meta>
          <_.Post_Tag>{tags}</_.Post_Tag>
          <_.Post_Date>{date}</_.Post_Date>
        </_.Post_Meta>
        <_.Post_Title_Line></_.Post_Title_Line>
        <_.Post_Content>
        <_.Post_Img src={img}></_.Post_Img>
        </_.Post_Content>
      </_.Post_Layout>
      <Footer />
    </>
  );
};

export default Post;
