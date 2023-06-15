import { useResizeObserver } from "@mantine/hooks";
import { AnimatePresence, motion as m } from "framer-motion";
import { FC, useState } from "react";
import Btn from "../components/Btn";
import useCarousel from "../hooks/useCarousel";
import { formatCurrency } from "../lib/utile/formatters";

const images = [
	{
		id: 1,
		src: "https://picsum.photos/300/600?random=5.webp",
		name: "Radiant Eye Cream",
		price: 40,
	},
	{
		id: 2,
		src: "https://picsum.photos/300/600?random=6.webp",
		name: "Radiant Renewal Night Cream",
		price: 50,
	},
	{
		id: 3,
		src: "https://picsum.photos/300/600?random=7.webp",
		name: "Radiant Glow Moisturizing Cream",
		price: 30,
	},
	{
		id: 4,
		src: "https://picsum.photos/300/600?random=8.webp",
		name: "Radiant Hydrating Serum",
		price: 45,
	},
	{
		id: 5,
		src: "https://picsum.photos/300/600?random=9.webp",
		name: "Radiant Firming Mask",
		price: 35,
	},
	{
		id: 6,
		src: "https://picsum.photos/300/600?random=10.webp",
		name: "Radiant Lip Treatment",
		price: 25,
	},
];
const OurProducts: FC = () => {
	const numOfCards =
		window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
	const { incr, decr, dir, activeIndexs } = useCarousel(
		images.length,
		numOfCards
	);
	const [isAnimating, setIsAnimating] = useState(false);
	const [ref, { width }] = useResizeObserver();
	const cardVarient = {
		entry: (dir: number) => ({
			x: (dir * width) / numOfCards,
		}),
		center: { x: 0 },
		exit: (dir: number) => ({
			x: (dir * -width) / numOfCards,
		}),
	};

	return (
		<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4 overflow-hidden bg-primary-50  ">
			<h2>Our Products</h2>
			<div className=" flex w-full justify-between px-2  sm:px-4  ">
				<Btn className=" bg-stone-100 px-4 py-2">view all</Btn>
				<div className=" flex items-center  gap-2">
					<Btn
						onClick={() => {
							setIsAnimating(true);
							decr();
						}}
						className="   text-3xl"
						variant="fill"
						shape="circle"
						disabled={isAnimating}
					>
						<img
							width="24"
							height="24"
							src="https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg"
							alt="Back Arrow"
						/>
					</Btn>
					<Btn
						onClick={() => {
							setIsAnimating(true);
							incr();
						}}
						className="  text-3xl"
						variant="fill"
						shape="circle"
						disabled={isAnimating}
					>
						<img
							width="24"
							height="24"
							src="https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg"
							alt="Next Arrow"
						/>
					</Btn>
				</div>
			</div>
			<ul
				ref={ref}
				className=" flex min-h-[calc(100vh-240px)]  w-full  items-center justify-around   gap-4    overflow-hidden     px-8 transition-transform"
			>
				<AnimatePresence
					onExitComplete={() => setIsAnimating(false)}
					initial={false}
					custom={dir}
					mode="popLayout"
				>
					{activeIndexs.map((act, index) => {
						const product = images[act];
						return (
							<m.li
								variants={cardVarient}
								layout="position"
								initial="entry"
								animate="center"
								exit="exit"
								custom={dir}
								key={product.id + "-" + index}
								transition={{
									duration: 1,
									ease: "linear",
									layout: { duration: 1, ease: "linear" },
								}}
								className=" relative flex h-[400px]  w-full  flex-col justify-between gap-4  rounded-2xl bg-stone-50 p-8 shadow sm:p-12"
							>
								<h4 className=" h-[70px]">{product.name || "product"}</h4>
								<div className=" text-2xl font-semibold text-primary-300">
									{formatCurrency(product.price) || "price"}
								</div>
								<div className="relative h-80 w-full overflow-hidden rounded-md">
									<img
										className="absolute h-full w-full object-cover"
										src={product.src}
										alt={product.name}
									/>
								</div>
								<div className=" flex w-full items-center justify-between">
									<Btn variant="fill" className=" whitespace-nowrap px-4 py-2">
										buy now
									</Btn>
									<Btn
										variant="outline"
										className=" whitespace-nowrap px-4 py-2"
									>
										learn more
									</Btn>
								</div>
							</m.li>
						);
					})}
				</AnimatePresence>
			</ul>
		</section>
	);
};

export default OurProducts;
