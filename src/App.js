import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { MyPage, MainPage, LoginPage, JoinPage, GoodLife, BadLife } from "./pages/index";
import { getCookie, removeCookie } from "./common/Cookies";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "./index";
import { setLogout } from "./redux/store/userSlice";
import ProtectedRoutes from "./routes/ProtectedRoutes";
// import "./App.css";
import "./style.css";
import "./reset.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getCookie("token");
    console.log(loggedIn, token);
    if (token && loggedIn === true) {
      console.log("토큰있음");
      setIsLoggedIn(true);
    } else {
      console.log("토큰 없음");
      setIsLoggedIn(false);
      dispatch(setLogout());
      persistor.purge();
      // navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <div className="app">
        <Routes>
          {/* 로그인 안해야 접근가능 */}
          <Route element={<ProtectedRoutes isLoggedIn={false} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
          </Route>
          {/* 로그인 해야 접근가능 */}
          <Route element={<ProtectedRoutes isLoggedIn={true} />}>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/" element={<MainPage />} />
            <Route path="/engel" element={<GoodLife />} />
            <Route path="/devil" element={<BadLife />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
