import {
	motion as m,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";
import { FC } from "react";
import Btn from "../components/Btn";
import Icons from "../components/Icons";

const Landing: FC = () => {
	const { scrollYProgress } = useScroll();
	const scale = useTransform(scrollYProgress, [0, 0.8], [80, 200]);
	return (
		<section  className=" sticky top-0  h-[90vh] overflow-hidden">
			<m.div
				style={{
					scale: useMotionTemplate`${scale}%`,
				}}
				className=" absolute inset-0  m-auto flex max-w-screen-md  flex-col items-center justify-center  overflow-hidden  rounded-[64px]  duration-300  "
			>
				<video
					autoPlay
					muted
					loop
					className="  h-full w-full  object-cover  "
					src="/lorem-ipsum.mp4"
				></video>
				<div className="absolute inset-0 bg-secondery/30   bg-blend-overlay" />
			</m.div>
			<div className=" absolute inset-0 m-auto flex max-w-sm flex-col justify-center gap-4 px-8 ">
				<h1 className=" text-center text-3xl sm:text-5xl">
					Elevate and Discover Radiant Skin.
				</h1>
				<div className=" flex w-full justify-between p-2">
					<Btn
						className="gap-1 whitespace-nowrap px-4 py-2  "
						shape="pill"
						variant="fill"
					>
						Shop now
						<Icons.rightArrow className="  h-6 w-6 fill-slate-50" />
					</Btn>
					<Btn className="px-4 py-2" shape="pill" variant="outline">
						Learn more
					</Btn>
				</div>
			</div>
		</section>
	);
};

export default Landing;
