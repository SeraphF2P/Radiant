import * as Collapsible from "@radix-ui/react-collapsible";
import { FC, useEffect, useState } from "react";
import Btn from "./Btn";

const Header: FC = () => {
	const [open, setOpen] = useState(false);
	useEffect(() => {
		if (window.screenY < 768) return setOpen(true);
	}, []);
	return (
		<header className="sticky top-0 z-20 w-full bg-stone-100   md:flex md:justify-between   ">
			<Collapsible.Root open={open} onOpenChange={setOpen} asChild>
				<>
					<div className=" min-h-20 relative  flex w-full  flex-row-reverse items-center justify-between p-4  md:w-auto">
						<Collapsible.Trigger asChild>
							<Btn className=" md:hidden " variant="fill">
								{open ? "close" : "open"}
							</Btn>
						</Collapsible.Trigger>

						<a className=" relative h-10 w-40  " href="#">
							<img
								className=" absolute left-0 top-0 h-full w-full max-w-full  object-cover"
								src="https://picsum.photos/300/200.webp"
								alt=""
							/>
						</a>
					</div>
					<Collapsible.Content asChild>
						<ul className=" flex h-72 w-full flex-col  items-center justify-around font-semibold text-stone-900  md:h-auto md:flex-row ">
							<li>products</li>
							<li>about us</li>
							<li>
								<Btn variant="fill" shape="pill" className="px-4 py-2">
									contact us
								</Btn>
							</li>
						</ul>
					</Collapsible.Content>
				</>
			</Collapsible.Root>
		</header>
	);
};

export default Header;
