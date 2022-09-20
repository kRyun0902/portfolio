import { Link, Outlet } from "react-router-dom";

// const boxStyle = {
//     height: 50,
//     lineHeight: '50px',
//     textAlign: 'center',
//     backgroundColor: '#ccc'
// }

const Articles = () => {
    return (
        <>
            {/* 여기에 Outlet 컴포넌트를 쓰지 않으면, 게시글-1, 2, 3을 눌러도 주소만 바뀌고,
                알맹이는 바뀌지 않는다. */}
            {/* <header style={boxStyle}>아티클즈 헤더 영역</header> */}
            <Outlet />
            <ul>
                <li><Link to="/articles/1">게시글-1</Link></li>
                <li><Link to="/articles/2">게시글-2</Link></li>
                <li><Link to="/articles/3">게시글-3</Link></li>
            </ul>

            {/* <footer style={boxStyle}>아티클즈 푸터 영역</footer> */}
        </>
    );
};

export default Articles;