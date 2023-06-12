import * as Collapsible from "@radix-ui/react-collapsible";
import { useState } from "react";
import Btn from "./Btn";

const Menu = () => {
	const [open, setOpen] = useState(false);
	return (
		<Collapsible.Root open={open} onOpenChange={setOpen}>
			<Collapsible.Trigger asChild>
				<Btn variant="fill">{open ? "open" : "colse"}</Btn>
			</Collapsible.Trigger>

			<Collapsible.Content forceMount className=" w-full bg-gray-500 ">
				<div className="Repository">
					<span className="Text">@radix-ui/colors</span>
				</div>
				<div className="Repository">
					<span className="Text">@stitches/react</span>
				</div>
			</Collapsible.Content>
		</Collapsible.Root>
	);
};

export default Menu;
