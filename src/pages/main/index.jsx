import React from "react";
import Header from "../../components/header/";
import beaner from "../../assets/InstaSplitPoster.jpg";
import Content from "../../components/content";
import data from "../../data/contents";
import Footer from "../../components/footer"
import * as _ from "./style";

const Main = () => {
  return (
    <div>       
      <Header />
      <img
        src={beaner}
        alt="Beaner"
        style={{ width:"100%", height: "auto" }}
      />
        <_.Main_Contents>
        {data.map((item) => (
          <Content img={item.imgURL} date={item.date} title={item.title}
          desc={item.desc}/>
          ))}
        </_.Main_Contents>
        <Footer/>
    </div>
  )
      }

export default Main;