import { AnimatePresence, motion as m } from "framer-motion";
import { FC } from "react";
import Btn from "../components/Btn";
import Modal from "../components/Modal";
import { pageTransision } from "../lib/framer-motion-variants";
import { formatCurrency } from "../lib/utile/formatters";

const products = [
	{
		id: 1,
		src: "https://picsum.photos/300/600?random=5.webp",
		name: "Radiant Eye Cream",
		price: 40,
	},
	{
		id: 2,
		src: "https://picsum.photos/300/600?random=6.webp",
		name: "Radiant Renewal Night Cream",
		price: 50,
	},
	{
		id: 3,
		src: "https://picsum.photos/300/600?random=7.webp",
		name: "Radiant Glow Moisturizing Cream",
		price: 30,
	},
	{
		id: 4,
		src: "https://picsum.photos/300/600?random=8.webp",
		name: "Radiant Hydrating Serum",
		price: 45,
	},
	{
		id: 5,
		src: "https://picsum.photos/300/600?random=9.webp",
		name: "Radiant Firming Mask",
		price: 35,
	},
	{
		id: 6,
		src: "https://picsum.photos/300/600?random=10.webp",
		name: "Radiant Lip Treatment",
		price: 25,
	},
];
const ProductsPage: FC = () => {
	return (
		<m.main
			variants={pageTransision}
			initial="initial"
			animate="animate"
			exit="exit"
      key="products page"
      style={{
        willChange:"opacity",
      }}
			className="  bg-stone-100"
		>
			<section className=" sticky top-0  h-[90vh] w-full overflow-y-hidden ">
				<img
					className=" absolute left-0 top-0 h-full  w-full  object-cover opacity-25  "
					src="/products/pmv-chamara-sCFL6R7loQk-unsplash.webp"
				/>
				<div className=" absolute inset-0 m-auto flex max-w-screen-lg text-center flex-col justify-center gap-4 px-8 ">
					<h1 className="  text-3xl sm:text-5xl">
					Our products catalogue
					</h1>
          <p>
            Discover Radiant's collection of high-quality, effective beauty products designed to enhance your natural radiance and leave you feeling confident in your own skin.
          </p>
				</div>
			</section>
			<section className=" relative flex min-h-[calc(100vh-72px)] w-full  flex-col  items-center justify-center bg-stone-100 ">
				<div className=" max-w-screen-lg mx-auto  w-full pt-4 flex  justify-between items-center">
          <h3 className=" capitalize">best seller</h3>
          <Modal/>
        </div>
        <m.ul
					layout
					layoutRoot
					className="   remove-scroll-bar  grid h-screen w-full grid-flow-row grid-cols-1 gap-8 overflow-y-scroll   p-4     sm:grid-cols-2 lg:grid-cols-3  "
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
										className="  relative  w-full  flex-col   justify-between gap-4 rounded-2xl  bg-primary-50  p-8 shadow sm:p-12"
									>
										<h4 className=" line-clamp-1 h-[70px] ">{product.name}</h4>
										<div className=" text-2xl font-semibold text-primary-300">
											{formatCurrency(product.price)}
										</div>
										<div className="relative h-80 w-full overflow-hidden rounded-md">
											<img
												className="absolute h-full w-full object-cover"
												src={product.src}
												alt={product.name}
											/>
										</div>
										<div className=" flex  w-full items-center justify-between py-4">
											<Btn
												variant="fill"
												className=" whitespace-nowrap px-3 py-2 capitalize"
											>
												buy now
											</Btn>
											<Btn
												variant="outline"
												className=" whitespace-nowrap px-3 py-2 capitalize"
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