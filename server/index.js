const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
const cors = require("cors");
// axios
const axios = require("axios");

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS 허용
let corsOptions = {
  origin: "https://openapi.naver.com",
  credentials: true,
};
app.use(cors(corsOptions));

// 네이버 API 정보 (환경변수 사용)
const ID = process.env.ID;
const SECRET = process.env.SECRET;

// API 데이터 가져오기
app.get("/face", (req, res) => {
  axios
    .post("https://openapi.naver.com/v1/vision/celebrity", {
      headers: {
        "X-Naver-Client-Id": ID,
        "X-Naver-Client-Secret": SECRET,
      },
    })
    .then((response) => {
      const { data } = response;
      // 클라이언트에 보내기
      res.send(data.items);
    })
    .catch((error) => {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      console.log(message);
    });
});
