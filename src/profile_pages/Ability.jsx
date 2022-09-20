import {motion} from 'framer-motion';

const Ability = () => {
    return (
        <motion.div initial={{y: -500}} animate={{y:0}} exit={{y:500}}>
            <section>
                <img src="./images/ability.png" alt="#" />
            </section>
        </motion.div>
    );
};

export default Ability;