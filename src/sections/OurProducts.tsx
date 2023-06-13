import { useResizeObserver } from "@mantine/hooks";
import { AnimatePresence, motion as m } from "framer-motion";
import { FC } from "react";
import Btn from "../components/Btn";
import useCarousel from "../hooks/useCarousel";

const OurProducts: FC = () => {
	const emtyArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
	const { incr, decr, dir, count } = useCarousel(emtyArray);
	const [ref, { width }] = useResizeObserver();
	const cardVarient = {
		entry: (dir: number) => ({
			x: dir * width + "%",
		}),
		center: { x: 0 },
		exit: (dir: number) => ({
			x: dir * -width + "%",
		}),
	};

	return (
		<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4 bg-primary-50  ">
			<h2>Our Products</h2>
			<div className=" flex w-full justify-between  bg-red-400">
				<Btn className=" bg-stone-100 px-4 py-2">view all</Btn>
				<div className=" flex items-center  gap-2">
					<Btn
						onPointerDown={() => {
							decr();
						}}
						className=" w-9  text-3xl"
						variant="fill"
						shape="circle"
					>
						{"<"}
					</Btn>
					<Btn
						onPointerDown={() => {
							incr();
						}}
						className=" w-9 text-3xl"
						variant="fill"
						shape="circle"
					>
						{">"}
					</Btn>
				</div>
			</div>

			<m.ul
				ref={ref}
				layout
				className="  relative flex min-h-[calc(100vh-160px)] w-full items-center justify-center  gap-4 overflow-hidden bg-sky-500 p-8"
			>
				<AnimatePresence custom={dir} mode="popLayout" presenceAffectsLayout>
					{[...emtyArray.slice(count, count + 2)].map((product) => {
						return (
							<m.li
								key={product}
								custom={dir}
								variants={cardVarient}
								initial="entry"
								animate="center"
								exit="exit"
								layout="position"
								transition={{
									duration: 1,
									ease: "linear",
									layout: { duration: 1, ease: "linear" },
								}}
								className=" relative flex  flex-col justify-between gap-4  rounded-2xl bg-green-400 p-16"
							>
								{product}
								<h2 className=" h-[70px]">{product.name || "product"}</h2>
								<div className=" text-2xl font-semibold text-primary-300">
									{product.price || "price"}
								</div>
								<div className="relative h-40 w-60 overflow-hidden rounded-md">
									<img
										className="absolute inset-0 bg-red-600 object-cover"
										src=""
										alt=""
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
