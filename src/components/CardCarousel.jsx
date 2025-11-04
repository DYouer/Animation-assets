// 1. 确保你已经安装了 framer-motion:
// npm install framer-motion

import React, { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";

import imgUI1 from "../assets/UI-Design.jpg";

// 我们的卡片数据
const cardData = [
	{ id: 1, title: ["Push", "the", "Edge"], bg: "bg-blue-500" },
	{ id: 2, title: ["Beyond", "the", "World"], bg: "bg-green-500" },
	{ id: 3, title: ["Worlds", "You", "Play"], bg: "bg-red-500" },
	{ id: 4, title: ["Leading", "the", "Future"], bg: "bg-purple-500" },
];

function CardCarousel() {
	const [currentIndex, setCurrentIndex] = useState(0);

	// --- 核心逻辑：定义动画 ---
	// 我们将使用 "variants"（变体）来简化动画属性
	const cardVariants = {
		// 初始状态 (新卡片进入前)：Y轴旋转180度（背面）
		initial: {
			opacity: 0,
			rotateY: 180,
		},
		// 动画状态 (卡片出现)：Y轴旋转回0度（正面）
		animate: {
			rotateY: 0,
			opacity: 1,
			transition: {
				opacity: { duration: 0.3, delay: 0.1 },
				duration: 0.4,
				ease: "easeOut",
			},
		},
		// 退出状态 (旧卡片消失)：Y轴旋转-180度（转到背面）
		exit: {
			rotateY: -180,
			opacity: 0,
			transition: {
				opacity: { duration: 0.3 },
				ease: "easeOut",
				duration: 0.4,
			},
		},
	};

	// --- 按钮点击处理 ---
	const handleNext = () => {
		// 使用模运算 (%) 来实现循环
		setCurrentIndex(prev => (prev + 1) % cardData.length);
	};

	const handlePrev = () => {
		// 这是一个安全的方式来处理反向循环（避免负数索引）
		setCurrentIndex(prev => (prev - 1 + cardData.length) % cardData.length);
	};

	const currentCard = cardData[currentIndex];

	return (
		<div className='flex flex-col items-center justify-center  grow p-8'>
			{/* --- 3D 舞台 ---
        这是实现3D效果最关键的部分。
        1. `perspective: 1000px`：在父元素上设置“透视”，告诉浏览器我们正在看一个3D场景。
        2. `relative`：为内部的 `absolute` 卡片提供定位上下文。
      */}
			<motion.div className='min-w-80 w-[25%] aspect-4/6 relative perspective-[1000px]'>
				{/*
          --- AnimatePresence ---
          这是 Framer Motion 的核心。
          1. 它会监听子组件的 "key" 的变化。
          2. `mode="wait"`: 这是一个重要属性！它告诉 AnimatePresence 
             "等待旧组件的 exit 动画播放完毕后，再开始新组件的 initial/animate 动画"。
             这完美实现了你“消失...然后出现”的需求。
        */}
				<AnimatePresence initial={false} mode='wait'>
					{/*
            --- motion.div (卡片) ---
            1. `key={currentCard.id}`：这是 AnimatePresence 跟踪组件的方式。
               当 key 改变时，它知道要替换组件并播放动画。
            2. `variants={cardVariants}`：应用我们上面定义的动画。
            3. `initial`, `animate`, `exit`：自动从 variants 中获取同名属性。
            4. `absolute`：让新旧卡片在同一个位置进行动画，不会互相推挤。
            5. `[backface-visibility:hidden]`：Tailwind CSS 的一个JIT属性，
               意思是“当元素旋转到背面时，将其隐藏”。这是3D翻转的必备属性。
          */}
					<motion.div
						key={currentCard.id}
						className={`w-full h-full px-6 py-10 absolute  shadow-lg flex  text-white text-[5rem] font-bold
                        backface-visibility-hidden] border-[0.5px] border-white`}
						variants={cardVariants}
						initial='initial'
						animate='animate'
						exit='exit'
						style={{ transformOrigin: "50% 50% -200px" }}
					>
						<div className='relative flex flex-col justify-between items-start w-full'>
							<div className='absolute  z-[-1] right-0 top-[50%] translate-y-[-50%] w-2/3 rotate-12'>
								<picture className=' '>
									<img
										src={imgUI1}
										alt='Card Icon'
										className='w-full aspect-auto  object-cover rounded-sm '
									/>
								</picture>
							</div>
							<div className='flex flex-col leading-[1.2] gap-2'>
								<div className='overflow-hidden '>
									<motion.span
										className='inline-block'
										variants={{
											initial: { y: "100%" },
											animate: {
												y: 0,

												transition: {
													duration: 0.3,
													ease: "easeOut",
													delay: 0.2,
												},
											},
										}}
									>
										{cardData[currentIndex].title[0]}
									</motion.span>
								</div>
								<div className='overflow-hidden '>
									<motion.span
										className='inline-block'
										variants={{
											initial: { y: "100%" },
											animate: {
												y: 0,

												transition: {
													duration: 0.3,
													ease: "easeOut",
													delay: 0.25,
												},
											},
										}}
									>
										{cardData[currentIndex].title[1]}
									</motion.span>
								</div>
							</div>
							<div className='overflow-hidden self-end'>
								<motion.span
									className='inline-block'
									variants={{
										initial: { y: "100%" },
										animate: {
											y: 0,

											transition: {
												duration: 0.3,
												ease: "easeOut",
												delay: 0.3,
											},
										},
									}}
								>
									{cardData[currentIndex].title[2]}
								</motion.span>
							</div>
						</div>
					</motion.div>
				</AnimatePresence>
			</motion.div>

			{/* --- 控制按钮 --- */}
			<div className='mt-8 flex gap-4'>
				<button
					onClick={handlePrev}
					className='px-6 py-2 bg-gray-700 text-white rounded-lg font-semibold shadow-md
                     hover:bg-gray-800 transition-colors'
				>
					上一张
				</button>
				<button
					onClick={handleNext}
					className='px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md
                     hover:bg-blue-700 transition-colors'
				>
					下一张
				</button>
			</div>
		</div>
	);
}

export default CardCarousel;
