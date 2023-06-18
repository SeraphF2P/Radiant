import { FC } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Btn from "./Btn";
import Icons from "./Icons";

interface ModalProps {}

const Modal: FC<ModalProps> = ({}) => {
	return (
		<Dialog.Root>
			<Dialog.Trigger asChild>
				<Btn>
					<Icons.search className=" h-6 w-6 hover:text-primary-300 " />
				</Btn>
			</Dialog.Trigger>
			<Dialog.Portal>
				<Dialog.Overlay className=" fixed inset-0 z-40 bg-gray-950/80 ">
					<Dialog.Content className=" absolute left-1/2 top-0 w-full  -translate-x-1/2 xs:top-16 xs:max-w-[500px] ">
						<div className="flex  h-14 w-full items-center justify-center overflow-hidden bg-stone-50 px-4 xs:rounded-[28px]">
							<div className=" flex h-full items-center justify-center px-2   ">
								<Icons.search className="    h-6 w-6 hover:text-primary-300 " />
							</div>
							<input
								placeholder="search products"
								type="text"
								className=" h-full w-full border-none bg-stone-50 placeholder:text-xl placeholder:capitalize "
							/>
						</div>
						<div className=" mx-8 my-4 flex h-14 items-center justify-center rounded-[40px] bg-gray-300 text-xl text-white xs:mx-auto ">
							Preview Mode
						</div>
					</Dialog.Content>
				</Dialog.Overlay>
			</Dialog.Portal>
		</Dialog.Root>
	);
};

export default Modal;
