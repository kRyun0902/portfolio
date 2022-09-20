import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.footer`
    min-width: 1200px;

    .sr-only{position:absolute;left:-9999px;}
    >.working{
        border-top: 1px solid #aaa;

        >p{
            padding-left: 7%;
            height: 80px;
            line-height: 80px;

            >a{
                margin: 0 30px;
                &:hover{text-decoration: underline;}
            }
        }//end of p

    }//end of .working

    >.info{
        background-color: #222;

        >.container{
            position: relative;
            padding: 45px 7% 40px;

            >h2,
            >p{
                margin-bottom: 15px;
                color: #eee;
                font-size: 13px;

                >a{color: #eee;}

                >.bar{margin: 0 10px;}
            }//end of p

            >h2:after{
                display: block;
                position: absolute;
                right: 7%;
                top: 50%;
                width: 53px;
                height: 68px;
                margin-top: -34px;
                background-image: url(./images/footer_logo.png);
                content: '';

            }//end of h2:after
        }//end of .container
    }//end of .info
`;

const Foot = () => {
    return (
        <Footer>
            <article class="working">
                <h2 class="sr-only">진행중인 작업</h2>
                <p>
                    <b>NEW</b>
                    <Link to="/">국립현대박물관 메인페이지 리뉴얼 작업중</Link>
                    <time datetime="2022-10-22 11:13">2022-10-22</time>
                </p>
                </article>

                <article class="info">
                <div class="container">
                    <h2>&copy; 2022 Designed by 안경민</h2>
                    <p class="contact">
                        <Link to="tel:010-1234-5678">HP : 010-1234-5678</Link>
                        <span class="bar">|</span>
                        <Link to="email:mvcweb@naver.com">Email : mvcweb@naver.com</Link>
                    </p>
                    <p class="iam_1">자바스크립트와 jQuery 로직을 구현할 수 있는 웹퍼블리셔</p>
                    <p class="iam_2">구조와 디자인, 기능을 분리한 MVC패턴의 시멘틱 웹페이지를 <span>구현할 수 있는 퍼블리셔</span></p>
                </div>
            </article>
        </Footer>
    );
};

export default Foot;