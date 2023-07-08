import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';


function GoodLife() {
  const [diary, setDiarys] = useState([]);

  useEffect(() => {
    axios.post('http://localhost:3005/api/diary/list', {
      type: "D",
    })
      .then(res => {
        console.log("Hi creator",res)
      });
  },[]);
  return (
    <div className="main-page">
      <div className="page-title">
        <h2>갓생일기</h2>
        <h3 className="page-subtitle angel-subtitle">오늘 나를 뿌듯하게한 모든 소소한 활동들을 적어보세요!</h3>
      </div>
      <div className="diary-content">
        <div className="diary-content-info">
          <div className="diary-content-userinfo">
            <div className="img"></div>
            <p className="main-author">다양이</p>
          </div>
          <p className="diary-content-detail-date">2023년 03월 26일 13:00</p>
        </div>
        <div className="diary-content-line"></div>
        <div className="main-content">
          <p className="main-content-text">아아아아아ㅏ아아아아아아아아아앙아아아아아아아아아아아아아아아아아아아아아아아아아아아아아앙아아아아아아아아아아아아아아아아아아아아아아아아아아아아아앙아아아아아아아아아아아아아아아아아아아아아아아아앙아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아앙아아아아아아아아아아아아아아아아아아아아아아아아아아아아아ㅏㅇ아아아아아아아앙아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아아ㅏ아</p>
        </div>
        <p className="diary-content-date">43분 전에 작성했습니다.</p>
      </div>
    </div>
  );
}

export default GoodLife;
