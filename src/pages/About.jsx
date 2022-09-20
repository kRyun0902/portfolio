import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>웹 퍼블리셔, 프론트엔드 개발자를 꿈꾸고 있습니다.</p>

            {/* <a href="/">Home으로 이동</a> */}
            <Link to = "/">Home으로 이동2</Link>
            {/*
                Link를 통해서 페이지를 이동하면,
                새로고침 버튼을 눌러도 메인 페이지로 가지 않는다.
            */}
        </div>
    );
};

export default About;