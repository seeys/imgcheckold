import "./App.css";
import Header from "./components/Header";
import InputImageBox from "./components/InputImageBox";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <Header>내 얼굴은 어떤 MBTI?</Header>
      <InputImageBox />
    </div>
  );
}

export default App;
