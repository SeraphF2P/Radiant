import { FC } from "react";
import Btn from "../components/Btn";
import Icons from "../components/Icons";
import { Link } from "react-router-dom";

const Footer: FC = () => {
	return (
		<footer className=" relative flex min-h-[calc(100vh-72px)] w-full justify-center bg-primary-50 sm:px-8">
			<div className=" flex  w-full  flex-col items-center justify-center gap-4     p-4 ">
				<div className=" flex w-full flex-col  items-center justify-between gap-8 p-8 px-4 md:flex-row ">
					<Link
						onClickCapture={() => window.scrollTo({ top: 0 })}
						className="  relative h-10 w-40  "
						to="/"
					>
						<Icons.logo />
						<span className=" sr-only">hompage</span>
					</Link>
					<div className=" flex flex-wrap justify-center gap-2 ">
						<Icons.paypal />
						<Icons.master />
						<Icons.appalePay />
						<Icons.americanExpress />
						<Icons.visa />
						<Icons.googlePay />
					</div>
				</div>
				<hr className=" w-full  bg-gray-400" />
				<div className="flex w-full flex-col items-center justify-center gap-4 p-8 px-4 md:flex-row md:justify-between">
					<div
						id="contact"
						className=" flex  w-full flex-col  gap-4 md:w-1/2  "
					>
						<h2 className=" my-6 font-semibold">contsct us</h2>
						<input
							className=" h-14 w-full rounded-2xl border-none"
							placeholder="Your name"
							type="text"
						/>
						<input
							className=" h-14 w-full rounded-2xl border-none"
							placeholder="Your email"
							type="text"
						/>
						<textarea
							className=" w-full resize-none  rounded-2xl border-none"
							placeholder="Your message"
							name=""
							id=""
							cols={30}
							rows={10}
						/>

						<Btn
							variant="fill"
							className="h-14 w-full rounded-2xl px-4 py-2 font-semibold capitalize"
						>
							send
						</Btn>
					</div>
					<div className=" grid h-full w-full grid-cols-1 grid-rows-2 gap-8 pt-24 sm:grid-cols-3 md:w-1/2   md:grid-cols-2  ">
						<div className=" flex flex-col items-center   justify-start gap-4 ">
							<h3 className=" my-4 capitalize">pages</h3>
							<ul className=" flex flex-col gap-4">
								<li>hompage</li>
								<li>about</li>
								<li>all products</li>
							</ul>
						</div>
						<div className=" flex flex-col items-center justify-start  ">
							<h3 className=" my-4 capitalize">social</h3>
							<ul className=" flex flex-col gap-4 md:flex-row ">
								<li className=" h-5 w-5 ">
									<a href="#">
										<Icons.instagram className="transition-colors duration-300  hover:fill-primary-300" />
										<span className=" sr-only">instagram</span>
									</a>
								</li>
								<li className=" h-5 w-5 ">
									<a href="#">
										<Icons.twitter className="transition-colors duration-300  hover:fill-primary-300" />
										<span className=" sr-only">twitter</span>
									</a>
								</li>
								<li className=" h-5 w-5 ">
									<a href="#">
										<Icons.facebook className="transition-colors duration-300  hover:fill-primary-300" />
										<span className=" sr-only">facebook</span>
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-center justify-start   ">
							<h3 className=" my-4 capitalize">phone</h3>
							<div>0000-000-000</div>
						</div>
						<div className="flex flex-col items-center justify-start   ">
							<h3 className=" my-4 capitalize">email</h3>
							<div>email@email.com</div>
						</div>
					</div>
				</div>
				<hr className=" w-full  bg-gray-400" />
				<p>Designed by Artyum Grenyuk - powered by Framer</p>
			</div>
		</footer>
	);
};

export default Footer;
