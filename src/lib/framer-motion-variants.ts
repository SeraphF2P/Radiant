import { Variants } from "framer-motion";
export const pageTransision: Variants = {
	initial: {
		opacity: 0.1,
    transition: {
			duration: 1,
			ease: "linear",
		},
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "linear",
		},
	},
	exit: {
		opacity: 0.1,
		transition: {
			duration: 1,
			ease: "linear",
		},
	},
};
