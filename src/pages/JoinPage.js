import React from "react";
import { useForm } from "react-hook-form";
import axiosPost from "../common/api";
import { useNavigate } from "react-router-dom";

function JoinPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log(data);

    axiosPost("users/userIdCheck", { userId: data.userId }).then((res) => {
      console.log("아이디 중복 체크", res.data);
      if (res.data.result === "success") {
        axiosPost("users/create", {
          userId: data.userId,
          userPwd: data.userPwd,
          nickName: data.nickname,
          pHint: data.birthDay,
        }).then((res) => {
          console.log("res", res);
          alert("회원가입에 성공하였습니다. \n로그인을 해주세요.");
          navigate("/login");
        });
      } else {
        alert("중복된 아이디 입니다. \n다른 아이디를 입력해주세요.");
      }
    });
  };
  const onError = (data) => {
    alert("회원가입에 실패하였습니다.");
    console.log(data);
  };

  return (
    <div className="join-page">
      <section>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <h3>회원가입</h3>
          <ul>
            <li>
              <label>아이디</label>
              <input name="userId" type="text" placeholder="아이디를 입력하세요." {...register("userId", { required: true, minLength: 6, maxLength: 18 })} />
              {errors.userId ? (
                <>
                  {errors.userId && errors.userId.type === "required" && <span className="error-msg">아이디를 입력하여 주세요.</span>}
                  {errors.userId && errors.userId.type === "minLength" && <span className="error-msg">최소 6자리로 입력하여 주세요.</span>}
                  {errors.userId && errors.userId.type === "maxLength" && <span className="error-msg">최대 18자리로 입력하여 주세요.</span>}
                </>
              ) : (
                <span>최대 길이 18자</span>
              )}
            </li>
            <li>
              <label>닉네임</label>
              <input name="nickname" type="text" placeholder="닉네임을 입력하세요." {...register("nickname", { required: true, maxLength: 7 })} />
              {errors.nickname ? (
                <>
                  {errors.nickname && errors.nickname.type === "required" && <span className="error-msg">닉네임을 입력하여 주세요.</span>}
                  {errors.nickname && errors.nickname.type === "maxLength" && <span className="error-msg">최대 7자로 입력하여 주세요.</span>}
                </>
              ) : (
                <span>최대 길이 7자</span>
              )}
            </li>
            <li>
              <label>비밀번호</label>
              <input name="userPwd" type="password" placeholder="비밀번호를 입력하세요." {...register("userPwd", { required: true, maxLength: 12 })} />
              {errors.userPwd ? (
                <>
                  {errors.userPwd && errors.userPwd.type === "required" && <span className="error-msg">비밀번호를 입력하여 주세요.</span>}
                  {errors.userPwd && errors.userPwd.type === "maxLength" && <span className="error-msg">최대 12자로 입력하여 주세요.</span>}
                </>
              ) : (
                <span>최대 길이 12자</span>
              )}
            </li>
            <li>
              <label>비밀번호 확인</label>
              <input name="checkPwd" type="password" placeholder="비밀번호를 입력하세요." {...register("checkPwd", { required: true, maxLength: 12 })} />
              {errors.checkPwd ? (
                <>
                  {errors.checkPwd && errors.checkPwd.type === "required" && <span className="error-msg">비밀번호를 입력하여 주세요.</span>}
                  {errors.checkPwd && errors.checkPwd.type === "maxLength" && <span className="error-msg">최대 12자로 입력하여 주세요.</span>}
                </>
              ) : (
                <span>최대 길이 12자</span>
              )}
            </li>
            <li>
              <label>비밀번호 힌트</label>
              <input
                name="birthDay"
                type="number"
                placeholder="생년월일을 입력해주세요. ex)19970506"
                {...register("birthDay", { required: true, maxLength: 8 })}
              />
              {errors.birthDay ? (
                <>
                  {errors.birthDay && errors.birthDay.type === "required" && <span className="error-msg">비밀번호 힌트를 입력하여 주세요.</span>}
                  {errors.birthDay && errors.birthDay.type === "maxLength" && <span className="error-msg">최대 8자로 입력하여 주세요.</span>}
                </>
              ) : (
                <span>최대 길이 8자</span>
              )}
            </li>
          </ul>
          <button type="submit">가입</button>
        </form>
      </section>
    </div>
  );
}

export default JoinPage;
