import React from "react";
import { useForm } from "react-hook-form";
import axiosPost from "../common/api";

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onSubmit" });

  const onSubmit = (data) => {
    console.log(data);
    axiosPost("users/login", {
      userId: data.userId,
      password: data.userPwd,
    }).then((res) => {
      console.log("res", res);
    });
  };
  const onError = (data) => {
    alert("로그인에 실패하였습니다.");
    console.log(data);
  };

  return (
    <div className="login-page">
      <div className="left-box">
        <div>
          <p className="login-title">
            갓생일기 로그인 페이지 <br /> 나중에 여기다 간지나는 문구 넣자
          </p>
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <ul>
              <li>
                <label>아이디</label>
                <input
                  type="text"
                  name="userEmail"
                  placeholder="아이디를 입력해주세요."
                  {...register("userId", { required: true, minLength: 6, maxLength: 18 })}
                />
                {errors.userId && errors.userId.type === "required" && <span>아이디를 입력하여 주세요.</span>}
                {errors.userId && errors.userId.type === "minLength" && <span>6자리 이상 입력하여 주세요.</span>}
              </li>
              <li>
                <label>
                  비밀번호
                  <input
                    type="password"
                    name="userPwd"
                    placeholder="비밀번호를 입력해주세요."
                    {...register("userPwd", { required: true, pattern: /^[A-Za-z0-9]{6,12}$/ })}
                  />
                  {errors.userPwd && errors.userPwd.type === "required" && <span>비밀번호를 입력하여 주세요.</span>}
                  {errors.userPwd && errors.userPwd.type === "pattern" && <span>문자, 숫자를 6~12자리 조합해주세요.</span>}
                </label>
              </li>
            </ul>
            <button type="submit">로그인</button>
          </form>
        </div>
      </div>
      <div className="right-box"></div>
    </div>
  );
}

export default LoginPage;
