import { useInterval } from "@mantine/hooks";
import { AnimatePresence, motion as m } from "framer-motion";
import { FC, useEffect } from "react";
import Btn from "../components/Btn";
import useCarousel from "../hooks/useCarousel";

const images = [
	"https://picsum.photos/300/600?random=5.webp",
	"https://picsum.photos/300/600?random=6.webp",
	"https://picsum.photos/300/600?random=7.webp",
	"https://picsum.photos/300/600?random=8.webp",
	"https://picsum.photos/300/600?random=9.webp",
];

const timer = 4;
const numOfSlides = 3;
const cardWidth = 240;
const spacing = 32;
const fullCardWidth = cardWidth + spacing;

const OurInstagram: FC = () => {
	const { incr, activeIndexs } = useCarousel(images.length, numOfSlides);
	const interval = useInterval(incr, timer * 1000);

	useEffect(() => {
		interval.start();
		return interval.stop;
	}, [interval]);

	return (
		<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4 overflow-hidden  bg-slate-100   ">
			<h2>our instagram</h2>
			<m.div
				layout
				layoutRoot
				className="relative  h-[60vh]  w-full overflow-hidden "
			>
				<AnimatePresence initial={false}>
					{activeIndexs.map((act, index) => {
						return (
							<m.div
								key={act}
								initial={{ x: fullCardWidth }}
								animate={{ x: 0 }}
								exit={{ x: -fullCardWidth }}
								layout="position"
								style={{
									left: spacing / 2 + index * fullCardWidth,
								}}
								transition={{
									duration: timer,
									ease: "linear",
								}}
								className=" absolute -translate-y-1/2 top-1/2  mx-4 inline-block h-60  w-60    overflow-hidden rounded bg-sky-400"
							>
								<img
									className="absoulote h-full w-full object-cover"
									src={images[act]}
									alt=""
								/>
							</m.div>
						);
					})}
				</AnimatePresence>
				<div className=" pointer-events-none absolute inset-0 bg-gradient-to-r from-stone-100 from-[1%] via-transparent  to-stone-100    to-[99%]"></div>
			</m.div>
			<Btn variant="fill" shape="pill" className="px-4 py-2">
				follow us @instagram
			</Btn>
		</section>
	);
};

export default OurInstagram;
