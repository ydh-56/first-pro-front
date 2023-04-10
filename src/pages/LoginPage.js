import React from "react";
import axios from "axios";

function LoginPage() {
  return (
    <div>
      <div className="left-box">
        <div>
          <p className="login-title">
            갓생일기 로그인 페이지 <br /> 나중에 여기다 간지나는 문구 넣자
          </p>
          <form>
            <h3>아이디</h3>
            <input />
            <h3>비밀번호</h3>
            <button>로그인</button>
          </form>
        </div>
      </div>
      <div className="right-box"></div>
    </div>
  );
}

export default LoginPage;
