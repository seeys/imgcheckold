import styled from "@emotion/styled";
import Header from "./components/Header";
import InputImageBox from "./components/InputImageBox";
import ResultImageBox from "./components/ResultImageBox";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <Header>당신의 나이를 맞춰볼게요!</Header>
      <InputImageBox />
      <ResultImageBox>결과</ResultImageBox>
    </div>
  );
}

export default App;
