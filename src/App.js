import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import About from './pages/About';
import Article from './pages/Article';
import Articles from './pages/Articles';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    // 라우터를 적용할 때는, 가장 최상단에 BrowserRouter를 import하고, 여기서 BrowserRouter 컴포넌트로 감싼다.
    <BrowserRouter>

      {/* 주소 경로 만들기 : Routes > Route 다수 */}
      <Routes>
        {/* 공통 레이아웃 컴포넌트 역할.
            이제 어느 Link를 눌러도 회색바가 공통으로 보인다.
        */}
        <Route element={<Layout />}>
          {/*
            path : 접속 경로. 슬래시 하나만 쓰면 http://localhost:3001/ 즉, 가장 첫 페이지. 메인페이지. 홈.
            element : 컴포넌트 이름
          */}
          <Route index element={<Home />} />
          {/* -> <Route path="/" element={<Home />} /> 랑 똑같은 코드.
              이건 그냥 메인 페이지 설정.
          */}


          <Route path="/about" element={<About />} />
          {/* 주소창에 http://localhost:3002/ 다음에 about을 이어서 입력하면, About 컴포넌트 내용이 뜬다. */}


          {/* 중첩(서브) 라우팅 방법. 공통 레이아웃 작성 원리 */}
          <Route path="/articles" element={<Articles />}>
            <Route path=":id" element={<Article />} />
            {/* Articles 컴포넌트 내용을 보면, /articles/ 다음에 써있는 숫자가 id에 담긴다. */}
          </Route>


          <Route path="*" element={<NotFound />} />
          {/* 주소창에 /하고 아무거나 입력하면 NotFound 내용 뜸 */}
          {/* 
            '*' 는 wildcard 문자인데, 이는 아무 텍스트나 매칭한다는 뜻 이다.
            이 라우트 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고,
            일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 된다.
          */}
        </Route>
      </Routes>
       
    </BrowserRouter>
  );
}

export default App;