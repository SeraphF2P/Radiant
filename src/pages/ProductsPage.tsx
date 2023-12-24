import { AnimatePresence, motion as m } from "framer-motion";
import { FC } from "react";
import Btn from "../components/Btn";
import Modal from "../components/Modal";
import { pageTransision } from "../lib/framer-motion-variants";
import { formatCurrency } from "../lib/utile/formatters";
import { products } from "../data.json";
import Image from "../components/Image";

const ProductsPage: FC = () => {
	return (
		<m.main
			variants={pageTransision}
			initial="initial"
			animate="animate"
			exit="exit"
			key="products page"
			style={{
				willChange: "opacity",
			}}
			className="  bg-stone-100"
		>
			<section className=" sticky top-0  h-[90vh] w-full overflow-y-hidden ">
				<Image
					wrapperClassName=" absolute inset-0 w-full h-full opacity-25"
					className=" absolute left-0 top-0 h-full  w-full  object-cover   "
					src="products/pmv-chamara-sCFL6R7loQk-unsplash.webp"
				/>
				<div className=" absolute inset-0 m-auto flex max-w-screen-lg flex-col justify-center gap-4 px-8 text-center ">
					<h1 className="  text-3xl sm:text-5xl">Our products catalogue</h1>
					<p>
						Discover Radiant's collection of high-quality, effective beauty
						products designed to enhance your natural radiance and leave you
						feeling confident in your own skin.
					</p>
				</div>
			</section>
			<section className=" relative flex min-h-[calc(100vh-72px)] w-full  flex-col  items-center justify-center bg-stone-100 ">
				<div className=" mx-auto flex  w-full max-w-screen-lg items-center  justify-between py-4">
					<h3 className=" capitalize">best seller</h3>
					<Modal />
				</div>
				<m.ul
					layout
					layoutRoot
					className=" flex  h-screen w-full  flex-wrap items-center justify-center gap-8  overflow-y-scroll pb-4   lg:px-8   "
				>
					<AnimatePresence>
						{products &&
							products.map((product) => {
								return (
									<m.li
										key={product.id}
										layout="position"
										initial={{ scale: 0.95, opacity: 0.1 }}
										animate={{ scale: 1, opacity: 1 }}
										exit={{ scale: 0.95, opacity: 0.1 }}
										style={{ willChange: "opacity" }}
										transition={{
											duration: 1,
											ease: "linear",
										}}
										className="  relative max-h-full  w-72 flex-col justify-around   gap-4   rounded-2xl bg-primary-50 p-8  shadow  xsm:w-80 xs:w-[344px] sm:p-12"
									>
										<h4 className="h-[70px]   ">{product.name}</h4>
										<div className="pb-4 text-2xl font-semibold text-primary-300">
											{formatCurrency(product.price)}
										</div>
										<Image
											wrapperClassName="relative h-80 w-full overflow-hidden rounded-md md:h-80"
											className="absolute h-full w-full max-w-full object-cover"
											src={product.src}
											alt={product.name}
										/>
										<div className=" flex w-full items-center justify-between pt-4">
											<Btn
												variant="fill"
												className=" whitespace-nowrap px-4 py-2"
											>
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
		</m.main>
	);
};

export default ProductsPage;
