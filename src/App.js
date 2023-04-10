import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MyPage, MainPage, LoginPage, JoinPage, GoodLife, BadLife } from "./pages/index";
// import "./App.css";
import "./style.css";
import "./reset.css";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/engel" element={<GoodLife />} />
          <Route path="/devil" element={<BadLife />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
