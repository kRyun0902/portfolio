import {motion} from 'framer-motion';

const Skill = () => {
    return (
        <motion.div initial={{x:-1200}} animate={{x:0}} exit={{x:1200}}>
            <section>
                <img src="./images/skill.png" alt="#" />
            </section>
        </motion.div>
    );
};

export default Skill;