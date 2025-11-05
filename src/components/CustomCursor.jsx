import { motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function CustomCursor({ variants = "default" }) {
	const cursorX = useMotionValue(0);
	const cursorY = useMotionValue(0);
	// Keep variants for scale / color changes. Position (x/y) is driven via style.
	const cursorVariants = {
		default: {},
		hover: {
			scale: 1.5,
			backgroundColor: "rgba(255, 0, 0, 0.8)",
		},
	};
	useEffect(() => {
		const moveCursor = e => {
			cursorX.set(e.clientX - 16); // Adjust for cursor size
			cursorY.set(e.clientY - 16); // Adjust for cursor size
		};
		window.addEventListener("mousemove", moveCursor);
		return () => {
			window.removeEventListener("mousemove", moveCursor);
		};
	}, [cursorX, cursorY]);
	return (
		<motion.div
			className='w-8 h-8 bg-green-600 rounded-full fixed left-0 top-0 pointer-events-none'
			variants={cursorVariants}
			animate={variants}
			initial='default'
			// motion values for x/y must be passed via the style prop
			style={{ x: cursorX, y: cursorY }}
		/>
	);
}
