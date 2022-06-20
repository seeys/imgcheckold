import styled from "@emotion/styled";
import axios from "axios";
import React from "react";
import { useRef, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";

const BoxContainer = styled.div`
  border: #087f5b solid 5px;
  border-radius: 15px;
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;

  .test:hover {
    color: #96f2d7;
  }
`;

const PreviewBox = styled.div`
  text-align: center;
`;

const InputImageBox = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const imgInput = useRef("");

  // API로 데이터를 받아오는 함수
  const fetchData = async (form) => {
    try {
      // '/api/search'로 서버에 요청
      const { data } = await axios.get("/face", {
        formData: form,
      });

      setResult(data);
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      console.log(message);
    }
  };

  // 파일 변경 감지 핸들러
  const onClickFile = (event) => {
    event.preventDefault();
    const img = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(img);
    const form = new FormData();
    form.append("image", img);
    fetchData(form);
    console.log(result);
    return new Promise((res) => {
      reader.onload = () => {
        setFile(reader.result);
        res();
      };
    });
  };

  return (
    <>
      <BoxContainer>
        <label htmlFor="input_file">
          <BsPlusSquare size="100" className="test" />
          <input
            type="file"
            style={{ display: "none" }}
            id="input_file"
            onChange={onClickFile}
            ref={imgInput}
          />
        </label>
      </BoxContainer>
      <PreviewBox>
        {file && <img src={file} alt="preview" width="200" height="200" />}
      </PreviewBox>
    </>
  );
};

export default InputImageBox;
