import {
	motion as m,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";
import Btn from "../components/Btn";
import Icons from "../components/Icons";
const Landing = ({
	container,
}: {
	container: React.MutableRefObject<null>;
}) => {
	const { scrollYProgress } = useScroll({
		container: container,
		layoutEffect: false,
	});
	const scale = useTransform(scrollYProgress, [0, 0.7], [80, 300]);

	return (
		<section className=" sticky top-0 z-0  h-[90vh] w-full     ">
			<m.div
				layout
				layoutRoot
				style={{
					scale: useMotionTemplate`${scale}%`,
				}}
				className=" absolute inset-0 -top-10 m-auto flex h-full  max-h-[600px]  min-h-[500px] w-full items-center justify-center  overflow-hidden  rounded-[64px] bg-primary-50 transition-transform    duration-300  ease-linear  "
			>
				<video
					autoPlay
					muted
					loop
					className=" absolute inset-0  h-full w-full object-cover opacity-25  "
					src={"/lorem-ipsum.mp4"}
				></video>
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
