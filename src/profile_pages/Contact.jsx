import {motion} from 'framer-motion';

const Contact = () => {
    return (
        <motion.div initial={{opacity: 1}} animate={{ x: [1200, 0, 0] }}>
            <section>
                <img src="./images/contact.png" alt="#" />
            </section>
        </motion.div>
    );
};

export default Contact;