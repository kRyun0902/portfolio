/*
    애니메이션 작성 : npm i framer-motion을 이용해서, 모듈 설치
    -> 파일ㅁ다 import {motion} from 'framer-motion'; 쓰기
    -> return 파트를 <motion> 태그로 묶기
*/

import {motion} from 'framer-motion';

const AboutMe = () => {
    return (
        /*
            <motion.div>으로 컴포넌트를 감싸준다.
            -> 들어가는 속성은 총 3개인데, initial={} animate={} exit={} 이다.
            initial : 컴포넌트가 화면에 나타날 때 (=뫄운트 될 때), 
            animate : 뫄운트가 완료된 직후
            exit : 화면에서 사라질 때 (=언뫄운트 될 때)
        */

        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <section>
                <img src="./images/aboutme.png" alt="#" />
            </section>
        </motion.div>
    );
};

export default AboutMe;