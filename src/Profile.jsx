import { lazy, Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


// import Home from './profile_pages/Home';
// import ProfileLayout from './ProfileLayout';
// import AboutMe from './profile_pages/AboutMe';
// import TalkTalk from './profile_pages/TalkTalk';
// import Skill from './profile_pages/Skill';
// import Ability from './profile_pages/Ability';
// import Contact from './profile_pages/Contact';

//컴포넌트를 렌더링 하는 시점에 페이지를 비동기적으로 로딩 - Suspense로 사용
// -> 페이지 로딩 속도가 빨라진다.
const Home = lazy(()=>import('./profile_pages/Home'));
const ProfileLayout = lazy(()=>import('./ProfileLayout'));
const AboutMe = lazy(()=>import('./profile_pages/AboutMe'));
const TalkTalk = lazy(()=>import('./profile_pages/TalkTalk'));
const Skill = lazy(()=>import('./profile_pages/Skill'));
const Ability = lazy(()=>import('./profile_pages/Ability'));
const Contact = lazy(()=>import('./profile_pages/Contact'));

const { PUBLIC_URL } = process.env;

const Profile = ()=>{
    return (
         <BrowserRouter basename={PUBLIC_URL}>
            <Suspense fallback={<ProfileLayout />}>
                <Routes>

                    {/* 공통레이아웃 설정 */}
                    <Route element={<ProfileLayout />}>

                        {/* 각 페이지에 대한 라우팅 설정 */}
                        <Route index element={<Home />} />
                        <Route path="/aboutme" element={<AboutMe />} />
                        <Route path="/talktalk" element={<TalkTalk />} />
                        <Route path="/skill" element={<Skill />} />
                        <Route path="/ability" element={<Ability />} />
                        <Route path="/contact" element={<Contact />} />

                    </Route>
                </Routes>
            </Suspense>
         </BrowserRouter>
    );
}

export default Profile;