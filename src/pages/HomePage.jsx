// import { motion } from "framer-motion";

// import Layout from "../Layout";
import CardCarousel from "../components/CardCarousel";

function HomePage() {
	return (
		// 使用 motion 组件来测试 Framer Motion
		<div className='w-screen min-h-screen flex flex-col p-10 bg-neutral-900 dot_bg text-neutral-100'>
			<h1 className='text-md  mb-8'>
				Card Carousel with 3D Flip Animation
			</h1>
			<CardCarousel />
		</div>
	);
}
export default HomePage;
