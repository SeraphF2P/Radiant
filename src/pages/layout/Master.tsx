import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../sections/Footer";
import ScrollToTopBtn from "../../components/ScrollToTopBtn";
import { AnimatePresence } from "framer-motion";
const Master = () => {
	return (
		<>
			<ScrollToTopBtn />
			<Header />
			<AnimatePresence>
				<Outlet />
			</AnimatePresence>
			<Footer />
		</>
	);
};
export default Master;
