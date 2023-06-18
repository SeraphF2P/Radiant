import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
const Master = lazy(() => import("./pages/layout/Master"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const About = lazy(() => import("./pages/About"));

function App() {
	return (
		<BrowserRouter>
			<Suspense
				fallback={
					<div className=" fixed flex h-screen w-full items-center justify-center bg-stone-100">
						<Logo />
					</div>
				}
			>
				<Routes>
					<Route element={<Master />}>
						<Route path="/" element={<HomePage />} />
						<Route path="/productspage" element={<ProductsPage />} />
						<Route path="/about" element={<About />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
