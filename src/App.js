import "./App.css";
import "./reset.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>H1 텍스트 입니다.</h1><br/>
                <h2>H2 텍스트 입니다.</h2><br/>
                <h3>H3 텍스트 입니다.</h3><br/>

                <input placeholder="닉네임을 입력해주세요."></input><br/>
                <button>안녕하세요 이건 버튼 비활성화 모습이애요</button><br/>
                <button class="btn-active">안녕하세요 이건 버튼 활성화 모습이애요</button><br/>
                <button class="btn-negative">안녕하세요 이건 회원 탈퇴 버튼이애요</button>
            </header>
        </div>
    );
}

export default App;
