import * as Collapsible from "@radix-ui/react-collapsible";
import { FC, useState } from "react";
import Btn from "./Btn";
import Icons from "./Icons";
import {
	useScroll,
	useTransform,
	motion as m,
	useMotionTemplate,
} from "framer-motion";
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
			className="sticky top-0 z-20 w-full bg-stone-100  shadow  md:flex md:justify-between   "
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

						<a className=" relative h-10 w-40  " href="#">
							<Icons.logo />
						</a>
					</div>
					<Collapsible.Content asChild>
						<div className=" flex h-72 w-full flex-col items-center  justify-evenly font-semibold text-stone-900  md:h-auto md:flex-row ">
							<span>products</span>
							<span>about us</span>
							<Btn variant="fill" shape="pill" className=" px-4  py-2">
								contact us
							</Btn>
						</div>
					</Collapsible.Content>
				</>
			</Collapsible.Root>
		</m.header>
	);
};

export default Header;
