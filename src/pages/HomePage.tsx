import { motion as m } from "framer-motion";
import { FC } from "react";
import Btn from "../components/Btn";
import Icons from "../components/Icons";
import Image from "../components/Image";
import { pageTransision } from "../lib/framer-motion-variants";
import Landing from "../sections/Landing";
import OurInstagram from "../sections/OurInstagram";
import OurProducts from "../sections/OurProducts";
const HomePage: FC = () => {
	return (
		<m.main
			variants={pageTransision}
			initial="initial"
			animate="animate"
			exit="exit"
			key="home page"
			style={{
				willChange: "opacity",
			}}
			className="  relative  bg-stone-100 "
		>
			<Landing />
			<section className=" relative flex min-h-[calc(100vh-72px)] w-full flex-col items-center justify-center gap-4 bg-stone-100 p-4  md:flex-row  lg:px-16  ">
				<Image
					wrapperClassName=" relative h-72 w-full  overflow-hidden  rounded-[32px] bg-primary-100/50 sm:h-[500px] md:w-1/3"
					className=" absolute h-full w-full object-cover"
					src="products/homepage-section-2.webp"
					alt="product-image"
				/>

				<div className="  flex w-full flex-col items-start gap-4 sm:h-[500px] sm:justify-around md:w-2/3">
					<h2>
						From supplements to skincare, we have everything you need to support
						your healthy lifestyle.
					</h2>
					<p>
						At Radiant Health & Wellness, we're committed to using only the
						highest quality, natural ingredients in our products. We believe
						that nature provides everything we need to achieve optimal health,
						and we're dedicated to harnessing its power to help you feel your
						best.
					</p>
					<Btn variant="fill" className=" capitalise gap-1 px-4 py-2">
						read more
						<Icons.rightArrow className=" h-6 w-6 fill-stone-50 " />
					</Btn>
				</div>
			</section>
			<section className=" relative flex flex-col items-center  justify-around gap-8 bg-stone-100  p-4 py-8  lg:px-16   ">
				<blockquote className=" text-center">
					"I would highly recommend the Radiant beauty product line to anyone
					looking for high-quality, effective skincare products. They are truly
					some of the best I've ever tried, and I will definitely be purchasing
					them again in the future."
				</blockquote>
				<div className=" flex h-8 w-60 items-center justify-center  gap-2 ">
					<Icons.star className=" h-6 w-6 text-primary-300 " />
					<Icons.star className=" h-6 w-6 text-primary-300 " />
					<Icons.star className=" h-6 w-6 text-primary-300 " />
					<Icons.star className=" h-6 w-6 text-primary-300 " />
					<Icons.star className=" h-6 w-6 text-primary-300 " />
				</div>
				<div className=" relative h-16 w-16 overflow-hidden rounded-full">
					<img
						className=" absolute h-full w-full object-cover"
						src="https://picsum.photos/200/200.webp"
						alt="profile-image"
					/>
				</div>
				<h3>Aria Patel</h3>
			</section>
			<OurProducts />
			<section className=" relative flex min-h-[calc(100vh-72px)] items-center justify-center bg-stone-100 lg:px-16     ">
				<div className=" mx-2 flex h-[80vh] w-full flex-col  overflow-hidden rounded-3xl  sm:mx-4 md:mx-0 md:flex-row md:rounded-none lg:rounded-[64px]">
					<div className="relative flex h-full  w-full flex-col items-center   justify-end bg-primary-300 text-center">
						<Image
							wrapperClassName=" absolute inset-0"
							src="products/homepage-section-4-1.webp"
							alt="product-image"
							className=" absolute bottom-0 h-full w-full object-cover object-[90%_80%] text-white "
						/>
						<h3 className=" relative p-4 font-semibold ">
							Elevate your beauty routine.
						</h3>
					</div>
					<div className="  relative flex h-full  w-full flex-col items-center   bg-primary-200   text-center">
						<Image
							wrapperClassName=" absolute inset-0"
							src="products/homepage-section-4-2.webp"
							className=" absolute bottom-0 h-full w-full object-cover object-[90%_80%] "
							alt="product-image"
						/>
						<h3 className=" relative p-4 font-semibold  ">
							Youthful, radiant complexion.
						</h3>
					</div>
					<div className="  relative flex h-full  w-full flex-col items-center  justify-end bg-primary-300   text-center">
						<Image
							wrapperClassName=" absolute inset-0"
							src="products/homepage-section-4-3.webp"
							className=" absolute bottom-0 h-full w-full object-cover object-center "
							alt="product-image"
						/>
						<h3 className=" relative p-4 font-semibold ">
							Radiant skin, all year.
						</h3>
					</div>
				</div>
			</section>
			<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4 bg-stone-100 lg:px-16     ">
				<h2 className=" w-full text-center">Quality without compromise</h2>
				<div className=" mx-2 flex  w-full flex-col items-center justify-center gap-4 sm:mx-4 md:mx-0 md:flex-row md:rounded-none lg:rounded-[64px]">
					<div className=" relative flex h-full w-full max-w-screen-mn flex-col items-center justify-center gap-2  text-center">
						<div className=" flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-200">
							<Icons.checkMark className=" w-[60px]" />
						</div>
						<h3>Transparency Matters</h3>
						<p>
							Being completely transparent with ingredients and manufacturing
							processes for informed choices.
						</p>
					</div>
					<div className=" relative flex h-full w-full max-w-screen-mn flex-col items-center justify-center gap-2  text-center">
						<div className=" flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-200">
							<Icons.lotus className=" w-[60px]" />
						</div>
						<h3>Quality Obsessed</h3>
						<p>
							Passionate about creating high-quality, safe, and harmful-free
							skincare products.
						</p>
					</div>
					<div className=" relative flex h-full w-full max-w-screen-mn flex-col items-center justify-center gap-2  text-center">
						<div className=" flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-200">
							<Icons.person className=" w-[60px]" />
						</div>
						<h3>Customer-First Approach</h3>
						<p>
							Committed to fair labor standards, responsible sourcing, and
							minimizing environmental impact throughout the supply chain.
						</p>
					</div>
				</div>
			</section>
			<OurInstagram />
		</m.main>
	);
};

export default HomePage;
