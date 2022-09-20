import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    width: 100%;
    min-width: 960px;
    background-color: #fff;
    box-sizing: border-box;

    > .container {
        position: relative;
        width: 1200px;
        height: 66px;
        margin: 0 auto;
        border-bottom: 1px solid #eee;

        > h1 {
            position: absolute;
            top: 50%;
            margin-top: -16px;
            left: 10px;
            background-image: url(./images/logo.png);
            background-repeat: no-repeat;

            // 스타일 할 때는 Link, NavLink 컴포넌트를 a태그로 보아야 한다.
            > a {
                display: block;
                height: 32px;
                color: #777;
                font-size: 16px;
                line-height: 32px;
                text-indent: 40px;
            }
        }  // end of h1

        nav {
            position: absolute;
            top: 30px;
            right: 20px;

            > ul {
                display: flex;

                > li {
                    border-left: 1px solid #ccc;

                    &:first-child {border: none;}

                    > a {
                        padding: 0 20px;
                        color: #777;
                        font-weight: 600;
                        text-transform: uppercase;

                        // NavLink는 클릭시, on 클래스가 붙는 효과가 기본 옵션으로 달려있어
                        // JS에서 함수를 쓰지 않아도 CSS 파트에서 [&.on]만 해줘도 된다.
                        &.on,
                        &:hover {color: #222; text-decoration: underline;}
                    }
                }  // end of li
            }  // end of ul
        }  // end of nav
    }  // end of .container
`;

const Head = () => {
    return (
        <Header>
            <div className="container">
                <h1><NavLink to="/">김경윤 포트폴리오</NavLink></h1>
                <nav>
                    <ul>
                        {/* 밑의 줄이랑 똑같은 코드인데 리팩ㅌ링 한 것. */}
                        <Navigation to="/aboutme">AboutMe</Navigation>
                        <Navigation to="/talktalk">Talk</Navigation>
                        <Navigation to="/skill">Skill</Navigation>
                        <Navigation to="/ability">Ability</Navigation>
                        <Navigation to="/contact">Contact</Navigation>

                        {/* className={({ isActive }) => isActive ? 'on' : undefined} */}
                        {/* react엔진이 isactive에 to다음에 있는 주소를 넣는다. 어바웃미는 /aboutme.
                            트루면 온클래스, 아니면 언디파인드.
                            그 어떤 네비게이션 탭메뉴를 눌러도 이동할 때 깜빡임이 해결된다.
                        */}
                        {/* <li><NavLink className={({ isActive }) => isActive ? 'on' : undefined} to="/aboutme">AboutMe</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'on' : undefined} to="/talktalk">Talk</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'on' : undefined} to="/skill">Skill</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'on' : undefined} to="/ability">Ability</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'on' : undefined} to="/contact">Contact</NavLink></li> */}
                    </ul>
                </nav>
            </div>
        </Header>
    );
};

export default Head;