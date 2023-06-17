import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";
import Icons from "../components/Icons";
import { variants } from "../lib/cva";
import { pageTransision } from "../lib/framer-motion-variants";

const About = () => {
	return (
		<m.main
			variants={pageTransision}
			initial="initial"
			animate="animate"
			exit="exit"
       style={{
        willChange:"opacity",
      }}
      key="about us page"
			className=" relative   min-h-screen    "
		>
			<section className=" sticky top-0   min-h-screen w-full overflow-y-hidden ">
				<img
					className=" absolute  left-0 top-0 h-full  w-screen  object-cover opacity-25  "
					src="/products/ashley-piszek-i-oVwKgErJw-unsplash.webp"
				/>
				<div className=" absolute inset-0 bg-gray-950/70 " />
				<div className=" absolute inset-0 mx-auto flex max-w-screen-lg  flex-col justify-center gap-4 px-8 text-white ">
					<h1 className="  sm:text-5xl">
						Welcome to Radiant, where we believe that true beauty comes from
						within.
					</h1>
					<p>
						Our mission is to provide you with high-quality, effective beauty
						products that enhance your natural radiance and help you feel
						confident in your own skin.
					</p>
				</div>
			</section>
		
      <div className=" relative  flex px-4 py-8 w-full items-center   justify-center bg-primary-50 ">
					<p className=" max-w-screen-lg">At Radiant, we are passionate about using only the best, most
					nourishing ingredients in our products. We carefully select each
					ingredient for its unique benefits, ensuring that every product we
					offer is not only effective, but also safe and gentle for all skin
					types.</p>
				</div>
				<section className="bg-stone-100 w-full relative  " >
          <div className="max-w-screen-lg mx-auto    flex  flex-col items-center justify-center gap-4    p-4 md:flex-row-reverse ">
					<div className=" relative h-72 w-full  overflow-hidden  rounded-[32px] bg-red-400 sm:h-[500px] md:w-1/3">
						<img
							className=" absolute h-full w-full object-cover"
							src="/products/aboutpage-section-1.webp"
							alt=""
						/>
					</div>
					<div className="  flex w-full flex-col items-start gap-4  sm:justify-around md:w-2/3">
						<h2>
							We believe that nature provides everything we need to achieve
							optimal health, and we're dedicated to harnessing its power to
							help you feel your best.
						</h2>
						<p>
							So whether you're looking to boost your immune system, improve
							your digestion, or simply take better care of your skin, we've got
							you covered. Explore our collection of products today and discover
							how Radiant Health & Wellness can help you feel your best, inside
							and out.
						</p>
						<Link to="/productspage"  className={variants({variant:"fill",className:"capitalise gap-1 px-4 py-2"})}>
						shop products 
							<Icons.rightArrow className=" h-6 w-6 fill-stone-50 " />
						</Link>
					</div>
          </div>
				</section>
		</m.main>
	);
};

export default About;
