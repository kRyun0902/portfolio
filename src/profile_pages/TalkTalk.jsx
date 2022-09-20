import {motion} from 'framer-motion';

const TalkTalk = () => {
    return (
        <motion.div initial={{scale: 0 }} animate={{ rotate: 360, scale: 1 }} transition={{type: "spring", stiffness: 260, damping: 20 }}>
            <section>
                <img src="./images/talktalk.png" alt="#" />
            </section>
        </motion.div>
    );
};

export default TalkTalk;