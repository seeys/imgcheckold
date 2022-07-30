import "./App.css";
import Header from "./components/Header";
import InputImageBox from "./components/InputImageBox";

function App() {
  return (
    <div style={{ margin: "10px" }}>
      <Header>내 얼굴의 닮은꼴</Header>
      <InputImageBox />
    </div>
  );
}

export default App;
