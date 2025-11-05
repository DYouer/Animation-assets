import { motion } from "framer-motion";
import CustomCursor from "../components/CustomCursor";
import { useState } from "react";

const AboutPage = () => {
	const [cursorVariant, setCursorVariant] = useState("default");
	const handleCursorVariantChange = variant => {
		setCursorVariant(variant);
	};
	return (
		<motion.div className='relative'>
			<motion.h1
				layout
				className='text-4xl font-bold text-center'
				onMouseEnter={() => handleCursorVariantChange("hover")}
				onMouseLeave={() => handleCursorVariantChange("default")}
			>
				关于页面 (About Page)
			</motion.h1>
			<CustomCursor variants={cursorVariant} />
		</motion.div>
	);
};
export default AboutPage;
