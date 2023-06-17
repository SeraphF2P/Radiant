import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Master = lazy(() => import("./pages/layout/Master"),);
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const About = lazy(() => import("./pages/About"));

function App() {
	return (
		<BrowserRouter >
			<Suspense fallback={"loading...."}>
        <Routes>
				<Route   element={<Master />}>
					<Route path="/"  element={<HomePage />} />
					<Route path="/productspage" element={<ProductsPage />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
      </Suspense>
		</BrowserRouter>
	);
}

export default App;
