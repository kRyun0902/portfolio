import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Foot from './components/Foot';
import Head from './components/Head';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    section {
        img {
            display: block;
            width: 100%;
        }
    }
`;
// 이 형태는, 터미널에 npm i styled-components를 입력해야만 쓸 수 있는 코드이다.

const Main = styled.main`
    margin-top: 66px;
`;

// 공통 레이아웃 기능으 컴포넌트인 ProfileLayout
const ProfileLayout = () => {
    return (
        // 이 Wrapper는 위의 코드 덕분에 div로 나온다.
        <Wrapper>
            <Head />

            <Main>
                <Outlet /> 
            </Main>
            
            <Foot />
        </Wrapper>
    );
};

export default ProfileLayout;