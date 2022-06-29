import styled from "@emotion/styled";
import axios from "axios";
import React, { useState } from "react";
import ResultImage from "./ResultImage";

const BoxContainer = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;
`;

const InsertBtn = styled.div`
  border: #087f5b solid 5px;
  border-radius: 30px;
  font-size: 50px;
  padding: 10px;

  &:hover {
    color: white;
    border: #38d9a9 solid 5px;
    background-color: #38d9a9;
  }
`;

const PreviewBox = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
`;

const BtnMbti = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  font-size: 30px;
  border: #087f5b solid 5px;
  border-radius: 30px;
  width: 200px;

  &:hover {
    color: white;
    border: #38d9a9 solid 5px;
    background-color: #38d9a9;
  }
`;

function InputImageBox() {
  const [imgSrc, setImgsrc] = useState("");
  const [files, setFiles] = useState("");
  const [imgResult, setimgResult] = useState(null);
  // 파일 선택하기
  const onClickFile = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    setFiles(e.target.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgsrc(reader.result);
        resolve();
      };
    });
  };

  const handleImgMbti = async (e) => {
    const formData = new FormData();
    formData.append("image", files);
    await axios.post("/api/img", formData).then((res) => {
      setimgResult(res.data.faces[0].landmark);
      console.log(imgResult);
    });
  };

  return (
    <>
      <BoxContainer>
        <label htmlFor="input_file">
          <InsertBtn>사진 선택하기</InsertBtn>
        </label>
        <input
          type="file"
          style={{ display: "none" }}
          id="input_file"
          onChange={onClickFile}
        />
      </BoxContainer>
      <PreviewBox>
        {imgSrc && <img src={imgSrc} alt="preview" width="300" height="300" />}
      </PreviewBox>
      <BtnMbti onClick={handleImgMbti}>MBTI 분석 하기</BtnMbti>
      <ResultImage data={imgResult} />
    </>
  );
}

export default InputImageBox;
