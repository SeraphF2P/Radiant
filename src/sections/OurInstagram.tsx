import { FC } from "react";
import Btn from "../components/Btn";
import {use} from "framer-motion"
interface OurInstagramProps {}
const images = [
	"https://picsum.photos/300/600?random=5.webp",
	"https://picsum.photos/300/600?random=6.webp",
	"https://picsum.photos/300/600?random=7.webp",
	"https://picsum.photos/300/600?random=8.webp",
	"https://picsum.photos/300/600?random=9.webp",
];
const OurInstagram: FC<OurInstagramProps> = ({}) => {
	return (
		<section className=" relative flex min-h-[calc(100vh-72px)] flex-col items-center justify-center gap-4 overflow-hidden  bg-slate-100   ">
			<h2>our instagram</h2>
			<div className=" flex h-[60vh] w-full items-center bg-red-500">
				{images &&
					images.map((image) => {
						return (
							<div className=" relative h-60 w-60 overflow-hidden rounded">
								<img
									className="absoulote h-full w-full object-cover"
									src={image}
									alt=""
								/>
							</div>
						);
					})}
			</div>
			<Btn variant="fill" shape="pill" className="px-4 py-2">
				follow us @instagram
			</Btn>
		</section>
	);
};

export default OurInstagram;
