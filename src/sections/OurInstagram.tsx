import { motion as m } from "framer-motion";
import { FC } from "react";
import Btn from "../components/Btn";
import { ourInstagram as images } from "../data.json";

const timer = 10;
const spacing = 16;
const cardWidth = 350;
const containerWidth = 1000;
const numOfSlides = images.length;
const sliderWidth = (cardWidth + spacing) * numOfSlides;
const fillerWidth = (sliderWidth - containerWidth) / 2;

const OurInstagram: FC = () => {
	return (
		<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4   bg-slate-100   ">
			<h2>our instagram</h2>
			<div className=" relative flex h-[60vh] w-full items-center overflow-hidden   ">
				<div
					style={{ width: sliderWidth }}
					className="   relative  flex  items-center"
				>
					{images &&
						images.map((image, index) => {
							return (
								<m.div
									key={image}
									initial={{ left: sliderWidth }}
									animate={{ left: -fillerWidth }}
									transition={{
										duration: timer,
										ease: "linear",
										repeat: Infinity,
										repeatType: "loop",
										delay: (index * timer) / numOfSlides,
									}}
									className=" absolute left-0 h-80 w-[350px] overflow-hidden rounded-xl   bg-primary-300 "
								>
									<img
										className="absoulote left-0 h-full w-full object-cover"
										src={image}
										alt=""
									/>
								</m.div>
							);
						})}
				</div>
				<div className=" pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-r from-stone-100 from-[1%] via-transparent  to-stone-100    to-[99%]"></div>
			</div>
			<Btn variant="fill" shape="pill" className="px-4 py-2">
				follow us @instagram
			</Btn>
		</section>
	);
};

export default OurInstagram;
