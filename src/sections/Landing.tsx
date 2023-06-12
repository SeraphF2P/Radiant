import {
	motion as m,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";
import { FC } from "react";
import Btn from "../components/Btn";

const Landing: FC = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 0.5], [80, 200]);
	return (
		<section className=" relative h-[90vh] overflow-hidden">
			<m.div
				style={{
					scale: useMotionTemplate`${scale}%`,
				}}
				className=" absolute inset-0  m-auto flex  max-w-screen-md flex-col items-center  justify-center  rounded-[64px] bg-sky-400  duration-300  "
			>
				<div className=" flex max-w-sm flex-col justify-center ">
					<h1 className="text-center text-5xl">
						Elevate and Discover Radiant Skin.
					</h1>
					<div className=" flex w-full justify-between p-2">
						<Btn className="px-4 py-2" shape="pill" variant="fill">
							Shop now
						</Btn>
						<Btn className="px-4 py-2" shape="pill" variant="outline">
							Learn more
						</Btn>
					</div>
				</div>
			</m.div>
		</section>
	);
};

export default Landing;
