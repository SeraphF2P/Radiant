import Btn from "./components/Btn";
import Header from "./components/Header";
import Landing from "./sections/Landing";
import OurInstagram from "./sections/OurInstagram";
import OurProducts from "./sections/OurProducts";

function App() {
	return (
		<>
			<div className=" bg-stone-900  text-center text-xs font-semibold text-stone-200 sm:p-1">
				want 10% off your first purchse? code PUCHASE at checkout
			</div>
			<Header />
			<main className=" relative z-10 mx-auto max-w-[1000px] bg-stone-100">
				<Landing />
				<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4  bg-slate-100  p-4 md:flex-row ">
					<div className=" relative h-72 w-full  overflow-hidden  rounded-[32px] bg-red-400 sm:h-[500px] md:w-1/3">
						<img
							className=" absolute h-full w-full object-cover"
							src="https://picsum.photos/300/600?random=4.webp"
							alt=""
						/>
					</div>
					<div className="  flex w-full flex-col items-start gap-4 sm:h-[500px] sm:justify-around md:w-2/3">
						<h2>
							From supplements to skincare, we have everything you need to
							support your healthy lifestyle.
						</h2>
						<p>
							At Radiant Health & Wellness, we're committed to using only the
							highest quality, natural ingredients in our products. We believe
							that nature provides everything we need to achieve optimal health,
							and we're dedicated to harnessing its power to help you feel your
							best.
						</p>
						<Btn variant="fill" className=" capitalise px-4 py-2">
							read more
						</Btn>
					</div>
				</section>
				<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-around gap-4 bg-slate-100  p-4  py-8 ">
					<blockquote className=" text-center">
						"I would highly recommend the Radiant beauty product line to anyone
						looking for high-quality, effective skincare products. They are
						truly some of the best I've ever tried, and I will definitely be
						purchasing them again in the future."
					</blockquote>
					<div className=" h-8  w-60 bg-red-400"></div>
					<div className=" relative h-20 w-20 overflow-hidden rounded-full">
						<img
							className=" absolute h-full w-full object-cover"
							src="https://picsum.photos/200/200.webp"
							alt=""
						/>
					</div>
					<h3>Aria Patel</h3>
				</section>
				<OurProducts />
				<section className=" relative flex min-h-[calc(100vh-72px)] items-center justify-center  bg-slate-100   ">
					<div className=" mx-2 flex h-[80vh] w-full flex-col  overflow-hidden rounded-3xl bg-red-400 sm:mx-4 md:mx-0 md:flex-row md:rounded-none lg:rounded-[64px]">
						<div className=" relative h-full w-full bg-green-400">
							<img
								src="https://picsum.photos/300/600?random=1.webp"
								className=" absolute h-full w-full object-cover"
								alt=""
							/>
						</div>
						<div className=" relative h-full w-full bg-amber-400">
							<img
								src="https://picsum.photos/300/600?random=2.webp"
								className=" absolute h-full w-full object-cover"
								alt=""
							/>
						</div>
						<div className=" relative h-full w-full bg-sky-400">
							<img
								src="https://picsum.photos/300/600?random=3.webp"
								className=" absolute h-full w-full object-cover"
								alt=""
							/>
						</div>
					</div>
				</section>
				<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4  bg-slate-100   ">
					<h2 className=" w-full text-center">Quality without compromise</h2>
					<div className=" mx-2 flex  w-full flex-col items-center justify-center gap-4 sm:mx-4 md:mx-0 md:flex-row md:rounded-none lg:rounded-[64px]">
						<div className=" relative flex h-full w-full max-w-screen-mn flex-col items-center justify-center gap-2  text-center">
							<div className=" flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-200"></div>
							<h3>Transparency Matters</h3>
							<p>
								Being completely transparent with ingredients and manufacturing
								processes for informed choices.
							</p>
						</div>
						<div className=" relative flex h-full w-full max-w-screen-mn flex-col items-center justify-center gap-2  text-center">
							<div className=" flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-200"></div>
							<h3>Quality Obsessed</h3>
							<p>
								Passionate about creating high-quality, safe, and harmful-free
								skincare products.
							</p>
						</div>
						<div className=" relative flex h-full w-full max-w-screen-mn flex-col items-center justify-center gap-2  text-center">
							<div className=" flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-primary-200"></div>
							<h3>Customer-First Approach</h3>
							<p>
								Committed to fair labor standards, responsible sourcing, and
								minimizing environmental impact throughout the supply chain.
							</p>
						</div>
					</div>
				</section>
				<OurInstagram />
			</main>
		</>
	);
}

export default App;
