import { useResizeObserver } from "@mantine/hooks";
import { AnimatePresence, motion as m } from "framer-motion";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "../components/Btn";
import { products } from "../data.json";
import useCarousel from "../hooks/useCarousel";
import { variants } from "../lib/cva";
import { formatCurrency } from "../lib/utile/formatters";

const OurProducts: FC = () => {
	const numOfCards =
		window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
	const [ref, { width }] = useResizeObserver();
	const spacing = 32;
	const cardWidth = width / numOfCards - spacing;
	const fullCardWidth = cardWidth + spacing;
	const { incr, decr, dir, activeIndexs } = useCarousel(
		products.length,
		numOfCards
	);
	const [isAnimating, setIsAnimating] = useState(false);
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
		<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4 overflow-hidden bg-primary-50 lg:px-8  ">
			<h2>Our Products</h2>
			<div className=" flex w-full justify-between px-2  sm:px-4  ">
				<Link
					to="productspage"
					className={variants({ className: "bg-stone-100 px-4 py-2 shadow" })}
				>
					view all
				</Link>
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
			<m.ul
				ref={ref}
				layout
				layoutRoot
				className=" relative min-h-[calc(100vh-240px)]   w-full  -translate-x-1/2 overflow-hidden px-4  xl:max-w-screen-lg 2xl:max-w-screen-xl  "
			>
				<AnimatePresence
					onExitComplete={() => setIsAnimating(false)}
					initial={false}
					custom={dir}
				>
					{activeIndexs.map((act, index) => {
						const product = products[act];
						return (
							<m.li
								layout="position"
								key={act}
								variants={cardVarient}
								initial="entry"
								animate="center"
								exit="exit"
								custom={dir}
								style={{
									width: cardWidth,
									left: index * fullCardWidth + spacing / 2,
									marginInline: spacing / 2,
								}}
								transition={{
									duration: 1,
									ease: "linear",
								}}
								className=" absolute inline-flex  max-h-full   flex-col justify-between gap-4  rounded-2xl bg-stone-50 p-8 shadow sm:p-12"
							>
								<h4 className=" line-clamp-1 h-[70px] ">{product.name}</h4>
								<div className=" text-2xl font-semibold text-primary-300">
									{formatCurrency(product.price)}
								</div>

								<div className=" relative h-96 w-full overflow-hidden rounded-md md:h-80">
									<img
										className="absolute h-full w-full max-w-full object-cover"
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
			</m.ul>
		</section>
	);
};

export default OurProducts;
