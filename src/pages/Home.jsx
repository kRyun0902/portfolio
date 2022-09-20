import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>방문해 주셔서 감사합니다.</p>

            {/* <a href="/about">About으로 이동</a> */}
            {/*
                react를 한다는 건, 대ㅂ분 싱글 페이지 어플리케이션을 만든다는 의도일 것이기 때문에,
                멀티 페이지 어플리케이션처럼 a태그를 쓰는 대신
                Link 컴포넌트를 쓴다.
            */}
            <p>
                <Link to="/about">About으로 이동2</Link>
                {/* 신기한 건, 페이지가서 검사를 눌러보면 이 Link 컴포넌트가 a 태그로 나타난다. */}
            </p>
        </div>
    );
};

export default Home;

// 3.5. Link 컴포넌트를 사용하여 다른 페이지로 이동하는 링크 보여주기
// 이번에는 Link 컴포넌트를 사용하여 다른 페이지로 이동하는 링크를 보여주는 방법을 알아보겠습니다. 웹 페이지에서는 원래 링크를 보여줄 때 a 태그를 사용하는데요,
// 리액트 라우터를 사용하는 프로젝트에서 a 태그를 바로 사용하면 안됩니다.
// 왜냐하면, a 태그를 클릭하여 페이지를 이동할 때 브라우저에서는 페이지를 새로 불러오게 되기 때문입니다. -> SPA 정책에 어긋남

// Link 컴포넌트 역시 a 태그를 사용하긴 하지만, 페이지를 새로 불러오는 것을 막고 History API를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있습니다.