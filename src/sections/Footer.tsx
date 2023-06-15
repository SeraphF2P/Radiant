import { FC } from "react";
import Btn from "../components/Btn";
import Icons from "../components/Icons";

const Footer: FC = () => {
	return (
		<footer className=" relative mx-auto flex min-h-[calc(100vh-72px)] max-w-[1000px] flex-col items-center justify-center gap-4 bg-slate-100  bg-stone-100  p-4 ">
			<div className=" flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between">
				<a className=" relative h-10 w-40  " href="#">
					<Icons.logo />
				</a>
				<div className=" flex gap-2 ">
					<Icons.paypal />
					<Icons.master />
					<Icons.appalePay />
					<Icons.americanExpress />
					<Icons.visa />
					<Icons.googlePay />
				</div>
			</div>
			<div className="flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between">
				<div className=" flex  flex-col items-center justify-center gap-4 md:w-1/2  ">
					<h2>contsct us</h2>
					<input
						className=" w-full rounded-md border-none"
						placeholder="Your name"
						type="text"
					/>
					<input
						className=" w-full rounded-md border-none"
						placeholder="Your email"
						type="text"
					/>
					<textarea
						className=" w-full rounded-md border-none"
						placeholder="Your message"
						name=""
						id=""
						cols={30}
						rows={10}
					></textarea>

					<Btn variant="fill" className="w-full rounded px-4 py-2">
						send
					</Btn>
				</div>
				<div className=" grid h-full w-full grid-cols-2 grid-rows-2 gap-8   md:w-1/2  ">
					<div className=" flex  flex-col gap-4 ">
						<h3 className=" my-4 capitalize">pages</h3>
						<ul>
							<li>hompage</li>
							<li>about</li>
							<li>all products</li>
						</ul>
					</div>
					<div className="   ">
						<h3 className=" my-4 capitalize">social</h3>
						<ul className=" flex flex-col gap-2 md:flex-row ">
							<li>insta</li>
							<li>twitter</li>
							<li>facebook</li>
						</ul>
					</div>
					<div className="   ">
						<h3 className=" my-4 capitalize">phone</h3>
						<div>0000-000-000</div>
					</div>
					<div className="   ">
						<h3 className=" my-4 capitalize">email</h3>
						<div>email@email.com</div>
					</div>
				</div>
			</div>
			<p>Designed by Artyum Grenyuk - powered by Framer</p>
		</footer>
	);
};

export default Footer;
