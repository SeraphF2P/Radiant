import * as Collapsible from "@radix-ui/react-collapsible";
import {
  motion as m,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import { variants } from "../lib/cva";
import Icons from "./Icons";
import ToggleBtn from "./ToggleBtn";

const Header: FC = () => {
	const [open, setOpen] = useState(window.innerWidth > 768 ? true : false);
	const { scrollY } = useScroll();
	const shadow = useTransform(
		scrollY,
		[0, window.innerHeight],
		["none", "0 1px 3px 0 rgb(0 0 0 / 0.2)"]
	);
	return (
		<m.header
			style={{ boxShadow: useMotionTemplate`${shadow}` }}
			className="sticky top-0 z-40 w-full bg-stone-100  shadow  md:flex md:justify-between   "
		>
			<Collapsible.Root open={open} onOpenChange={setOpen} asChild>
				<>
					<div className=" min-h-20 relative  flex w-full  flex-row-reverse items-center justify-between p-4  md:w-auto">
						<Collapsible.Trigger asChild>
							<ToggleBtn
								style={{
									transform: "none",
									transformOrigin: "50% 50% 0px",
									opacity: 1,
								}}
								className=" h-[28px] w-[28px] flex-col  gap-1 md:hidden "
								variant="fill"
							>
								{(isToggled) => (
									<>
										<div
											className={`${
												isToggled && "translate-y-1.5 rotate-45 "
											} h-0.5 w-[18px] rounded bg-stone-100 transition-transform duration-500 `}
										/>
										<div
											className={`${
												isToggled ? "w-0 " : "w-3.5"
											} h-0.5 rounded bg-stone-100 transition-[width] duration-500 `}
										/>
										<div
											className={`${
												isToggled && "w-[18px] -translate-y-1.5 -rotate-45"
											} h-0.5 w-2.5 rounded bg-stone-100 transition-[transform_width]  duration-500 `}
										/>
									</>
								)}
							</ToggleBtn>
						</Collapsible.Trigger>

						<NavLink className=" relative h-10 w-40  " to="/">
							<Icons.logo />
						</NavLink>
					</div>
					<Collapsible.Content asChild>
						<div className=" flex h-72 w-full flex-col items-center  justify-evenly font-semibold text-stone-900  md:h-auto md:flex-row ">
							<NavLink
								className={({ isActive }) =>
									` ${
										isActive ? "text-primary-300 " : "text-black"
									}  text-xl capitalize transition-colors duration-500 hover:text-primary-300`
								}
								to="/productspage"
							>
								products
							</NavLink>
							<NavLink
								className={({ isActive }) =>
									` ${
										isActive ? "text-primary-300 " : "text-black"
									}  text-xl capitalize transition-colors duration-500 hover:text-primary-300`
								}
								to="/about"
							>
								about us
							</NavLink>
							<a
								href="#contact"
								className={variants({
									variant: "fill",
									shape: "pill",
									className: "scroll-smooth  px-4 py-2",
								})}
							>
								contact us
							</a>
						</div>
					</Collapsible.Content>
				</>
			</Collapsible.Root>
		</m.header>
	);
};

export default Header;
