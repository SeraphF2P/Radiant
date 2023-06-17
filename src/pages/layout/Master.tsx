import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../sections/Footer";
import ScrollToTopBtn from "../../components/ScrollToTopBtn";
import { AnimatePresence } from "framer-motion";
const Master = () => {
	return (
		<>
			<div className=" bg-stone-900  text-center text-xs font-semibold text-stone-200 sm:p-1">
				want 10% off your first purchse? code PUCHASE at checkout
			</div>
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
