import * as Collapsible from "@radix-ui/react-collapsible";
import {
	motion as m,
	useMotionTemplate,
	useScroll,
	useTransform,
} from "framer-motion";
import { FC, useRef } from "react";
import { NavLink } from "react-router-dom";
import { variants } from "../lib/cva";
import Btn from "./Btn";
import Icons from "./Icons";

const Header: FC = () => {
	const container = useRef(document.getElementById("root"));
	const { scrollY } = useScroll({
		container,
	});
	const shadow = useTransform(
		scrollY,
		[0, window.innerHeight],
		["none", "0 1px 3px 0 rgb(0 0 0 / 0.2)"]
	);

	return (
		<m.header
			style={{ boxShadow: useMotionTemplate`${shadow}` }}
			className=" fixed  left-0 top-0 z-40 w-full  bg-stone-100  shadow   "
		>
			<div className=" bg-stone-900  text-center text-xs font-semibold text-stone-200 sm:p-1">
				want 10% off your first purchse? code PUCHASE at checkout
			</div>
			<div className=" px-2 mn:px-4 sm:px-8 md:flex  md:justify-between md:px-16">
				<Collapsible.Root defaultOpen={window.innerWidth > 768} asChild>
					<>
						<div className=" min-h-20 relative  flex   flex-row-reverse items-center justify-between p-4 ">
							<Collapsible.Trigger asChild>
								<Btn
									style={{
										transform: "none",
										transformOrigin: "50% 50% 0px",
										opacity: 1,
									}}
									className=" group h-[28px] w-[28px] flex-col gap-1   md:hidden "
									variant="fill"
								>
									<span className=" sr-only">menu</span>
									<div
										className={`h-0.5  w-[18px]  rounded bg-stone-100  transition-transform duration-500 group-data-[state=open]:translate-y-1.5 group-data-[state=open]:rotate-45 `}
									/>
									<div
										className={`
												h-0.5  rounded
										bg-stone-100 transition-[width] duration-500 group-data-[state=closed]:w-3.5 group-data-[state=open]:w-0 `}
									/>
									<div
										className={`h-0.5 w-2.5 rounded bg-stone-100 transition-[transform_width] duration-500 group-data-[state=open]:w-[18px] group-data-[state=open]:-translate-y-1.5  group-data-[state=open]:-rotate-45 `}
									/>
								</Btn>
							</Collapsible.Trigger>

							<NavLink
								onClickCapture={() => window.scrollTo({ top: 0 })}
								className=" relative  "
								to="/"
							>
								<Icons.logo className=" h-10 w-40" />
								<span className=" sr-only">home page</span>
							</NavLink>
						</div>
						<Collapsible.Content className="flex-1 overflow-hidden  data-[state='closed']:animate-slideUp data-[state='open']:animate-slideDown md:flex md:justify-between">
							<div className=" flex h-72  flex-1 flex-col items-center  justify-evenly  pb-8  font-semibold text-stone-900   md:h-auto md:w-1/2 md:flex-row    md:justify-end    md:gap-4   md:pb-0   ">
								<div className=" flex flex-1 flex-col justify-evenly  gap-8 md:flex-row md:justify-center">
									<NavLink
										onClickCapture={() => window.scrollTo({ top: 0 })}
										className={({ isActive }) =>
											` ${
												isActive ? "text-primary-300 " : "text-black"
											}  text-xl capitalize  transition-colors duration-500 hover:text-primary-300`
										}
										to="/productspage"
									>
										products
									</NavLink>
									<NavLink
										onClickCapture={() => window.scrollTo({ top: 0 })}
										className={({ isActive }) =>
											` ${
												isActive ? "text-primary-300 " : "text-black"
											}  text-xl capitalize transition-colors duration-500 hover:text-primary-300`
										}
										to="/about"
									>
										about us
									</NavLink>
								</div>
								<a
									href="#contact"
									className={variants({
										variant: "fill",
										shape: "pill",
										className: " scroll-smooth  px-4  py-2 ",
									})}
								>
									contact us
								</a>
							</div>
						</Collapsible.Content>
					</>
				</Collapsible.Root>
			</div>
		</m.header>
	);
};

export default Header;
