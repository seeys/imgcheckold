import styled from "@emotion/styled";
import React from "react";
import { BsPlusSquare } from "react-icons/bs";

const BoxContainer = styled.div`
  border: #087f5b solid 2px;
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

const handleClick = () => {
  console.log("click");
};

const InputImageBox = () => {
  return (
    <BoxContainer>
      <BsPlusSquare size="100" onClick={handleClick} className="test" />
    </BoxContainer>
  );
};

export default InputImageBox;
