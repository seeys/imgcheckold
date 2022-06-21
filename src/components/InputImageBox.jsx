import styled from "@emotion/styled";
import React from "react";

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

function InputImageBox() {
  // 파일 보내기
  const onClickFile = (e) => {
    console.log("hi");
    console.log(e.target.files[0]);
  };

  return (
    <>
      <BoxContainer>
        <label htmlFor="input_file">
          <InsertBtn>insert</InsertBtn>
        </label>
        <input
          type="file"
          style={{ display: "none" }}
          id="input_file"
          onChange={onClickFile}
        />
      </BoxContainer>
      <PreviewBox>미리보기</PreviewBox>
    </>
  );
}

export default InputImageBox;
