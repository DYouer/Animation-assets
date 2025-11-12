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
			backgroundColor: "oklch(52.7% 0.154 150.069)",
		},
	};
	useEffect(() => {
		const moveCursor = e => {
			cursorX.set(e.clientX - 4); // Adjust for cursor size
			cursorY.set(e.clientY - 4); // Adjust for cursor size
		};
		window.addEventListener("mousemove", moveCursor);
		return () => {
			window.removeEventListener("mousemove", moveCursor);
		};
	}, [cursorX, cursorY]);
	return (
		<motion.div
			className={`${
				variants === "default" ? "p-2" : "px-4 py-2"
			}  bg-white rounded-full fixed left-0 top-0 pointer-events-none z-100 text-xs text-white`}
			variants={cursorVariants}
			animate={variants}
			initial='default'
			// motion values for x/y must be passed via the style prop
			style={{ x: cursorX, y: cursorY }}
		>
			{variants === "hover" ? "Detail" : ""}
		</motion.div>
	);
}
