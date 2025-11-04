import { motion } from "framer-motion";

const AboutPage = () => {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.5 }}
		>
			<motion.h1 layout className='text-4xl font-bold text-center'>
				关于页面 (About Page)
			</motion.h1>
		</motion.div>
	);
};
export default AboutPage;
