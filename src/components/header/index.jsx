import React, { useEffect, useState } from "react";
import * as _ from "./style";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Header = ({ userName }) => {
  const history = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://10.150.150.193:3000/auth/", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((res) => {
        console.log(res.data?.data.nickname);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <_.Header_Container>
      <h1>#</h1>
      {data ? (
        <>
          <_.Header_button>{data?.data.nickname}</_.Header_button>

          <_.Header_button>
            <Link to="/write">글쓰기</Link>
          </_.Header_button>

          <_.Header_button
            onClick={() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("refreshToken");
              window.location.reload()
            }}
          >
            로그아웃
          </_.Header_button>
        </>
      ) : (
        <>
          <_.Header_button backgroundColor="#fff" color="#696969">
            <Link to="/auth/signin">로그인</Link>
          </_.Header_button>
        </>
      )}
    </_.Header_Container>
  );
};

export default Header;