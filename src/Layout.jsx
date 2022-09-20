import { Outlet, Link } from "react-router-dom";

const boxStyle = {
    textAlign:'center',
    backgroundColor:'#ccc'
};

const Layout = () => {
    return (
        <div id="wrap">
            <header style={boxStyle}>
                <h1>React 라우터</h1>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/articles">게시글 목록</Link></li>
                    {/* <li><Link to=""></Link></li>
                    <li><Link to=""></Link></li> */}
                    </ul>
                </nav>
            </header>


            <main>
                <Outlet />
            </main>
            <footer style={boxStyle}>푸터영역</footer>
        </div>
    );
};

export default Layout;