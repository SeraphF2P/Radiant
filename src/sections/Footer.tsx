import { FC } from "react";
import Btn from "../components/Btn";
import Icons from "../components/Icons";
import { Link } from "react-router-dom";

const Footer: FC = () => {
	return (
		<footer className=" relative sm:px-8 flex min-h-[calc(100vh-72px)] w-full justify-center bg-primary-50">
			<div className=" flex  w-full  flex-col items-center justify-center gap-4     p-4 ">
				<div className=" flex w-full flex-col  p-8 items-center justify-between gap-8 px-4 md:flex-row ">
					<Link className="  relative h-10 w-40  " to="/">
						<Icons.logo />
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
<hr className=" bg-gray-400  w-full"/>
				<div className="flex p-8 w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:justify-between">
					<div
						id="contact"
						className=" flex  flex-col w-full  gap-4 md:w-1/2  "
					>
						<h2 className=" font-semibold my-6">contsct us</h2>
						<input
							className=" w-full h-14 rounded-2xl border-none"
							placeholder="Your name"
							type="text"
						/>
						<input
							className=" w-full h-14 rounded-2xl border-none"
							placeholder="Your email"
							type="text"
						/>
						<textarea
							className=" w-full  rounded-2xl border-none"
							placeholder="Your message"
							name=""
							id=""
							cols={30}
							rows={10}
						></textarea>

						<Btn variant="fill" className="w-full capitalize font-semibold h-14 rounded-2xl px-4 py-2">
							send
						</Btn>
					</div>
					<div className=" grid h-full w-full pt-24 grid-cols-1 md:grid-cols-2 sm:grid-cols-3 grid-rows-2 gap-8   md:w-1/2  ">
						<div className=" flex justify-start items-center   flex-col gap-4 ">
							<h3 className=" my-4 capitalize">pages</h3>
							<ul className=" flex flex-col gap-4">
								<li>hompage</li>
								<li>about</li>
								<li>all products</li>
							</ul>
						</div>
						<div className=" flex justify-start flex-col items-center  ">
							<h3 className=" my-4 capitalize">social</h3>
							<ul className=" flex flex-col gap-4 md:flex-row ">
								<li className=" w-5 h-5 ">
                  <a href="#">
                  <Icons.instagram className="hover:fill-primary-300 duration-300  transition-colors"/>
                  </a>
                  </li>
								<li className=" w-5 h-5 ">
                  <a href="#">
                  <Icons.twitter className="hover:fill-primary-300 duration-300  transition-colors"/>
                  </a>
                  </li>
								<li className=" w-5 h-5 ">
                  <a href="#">
                  <Icons.facebook className="hover:fill-primary-300 duration-300  transition-colors"/>
                  </a>
                  </li>
                 
							</ul>
						</div>
						<div className="flex justify-start flex-col items-center   ">
							<h3 className=" my-4 capitalize">phone</h3>
							<div>0000-000-000</div>
						</div>
						<div className="flex justify-start flex-col items-center   ">
							<h3 className=" my-4 capitalize">email</h3>
							<div>email@email.com</div>
						</div>
					</div>
				</div>
        <hr className=" bg-gray-400  w-full"/>
				<p>Designed by Artyum Grenyuk - powered by Framer</p>
			</div>
		</footer>
	);
};

export default Footer;
