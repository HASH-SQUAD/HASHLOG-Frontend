import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import * as _ from "./style";
import img from "../../assets/Pinterest Image.jpg";
import shareB from "../../assets/shareB.svg";
import shareW from "../../assets/shareW.svg";

const Post = () => {
  const data = {
    title: "해쉬브라운 먹고싶다",
    date: "2023.09.02",
    tags: ["일상", "사담"],
    content: `해쉬브라운을 먹고 싶은 이유는 여러 가지가 있습니다. 먼저, 해쉬브라운은 감자와 버터의 조화로 고소하고 바삭한 맛을 자랑합니다. 잘 튀겨진 해쉬브라운의 바삭한 겉면과 부드러운 속은 누구나 좋아할 만한 맛을 제공합니다.

    또한, 해쉬브라운의 바삭바삭한 식감은 입안에서 즐거움을 줍니다. 감자의 부드러움과 겉의 바삭함이 조화를 이루어 씹는 즐거움을 배가시킵니다. 아침 식사로 해쉬브라운을 먹으면 든든하고 기분 좋은 시작을 할 수 있습니다.
    
    해쉬브라운은 다양한 방식으로 즐길 수 있어 더 매력적입니다. 간단하게 케첩이나 소스를 곁들여 먹거나, 계란과 베이컨을 곁들여 더욱 풍성한 식사를 만들 수 있습니다. 이러한 다양한 조합은 해쉬브라운을 더욱 먹고 싶게 만듭니다.
    
    마지막으로, 해쉬브라운은 편리한 간식이기도 합니다. 냉동 해쉬브라운을 이용하면 언제든지 간편하게 만들어 먹을 수 있어 바쁜 일상 속에서도 쉽게 즐길 수 있습니다. 이러한 이유들로 인해 해쉬브라운은 언제나 먹고 싶은 음식 중 하나로 손꼽힙니다.`,
  };

  const [copySuccess, setCopySuccess] = useState(false);

  const copyUrlToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    });
  };

  return (
    <>
      <Header />
      <_.Post_Layout>
        <_.Post_Title>{data.title}</_.Post_Title>
        <_.Post_Meta>
          {data.tags.map((tag, index) => (
            <_.Post_Tag key={index}>{tag}</_.Post_Tag>
          ))}
          <_.Post_Date>{data.date}</_.Post_Date>
        </_.Post_Meta>
        
        <_.Post_Title_Line />
        <_.Post_Img_Layout>
          <_.Post_Img src={img} />
        </_.Post_Img_Layout>
        <_.Post_Content_Layout>
          <_.Post_Content>{data.content}</_.Post_Content>
          <_.Post_Share_Button onClick={copyUrlToClipboard}>
            <_.Post_Share_Icon src={shareW} />
            <p>공유하기</p>
          </_.Post_Share_Button>
        </_.Post_Content_Layout>
      </_.Post_Layout>
      <Footer />
      {copySuccess && (
        <_.Post_Share_Success>
          <_.Post_Share_Success_Icon src={shareB} />
          <p> 링크가 복사되었습니다. </p>
        </_.Post_Share_Success>
      )}
    </>
  );
};

export default Post;
