import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
const Master = lazy(() => import("./pages/layout/Master"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
const About = lazy(() => import("./pages/About"));

const router = createBrowserRouter([
	{
		element: <Master />,

		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/productspage",
				element: <ProductsPage />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);
function App() {
	return (
		<>
			<Suspense
				fallback={
					<div className=" fixed flex h-screen w-full items-center justify-center bg-stone-100">
						<Logo />
					</div>
				}
			>
				<RouterProvider router={router} />
			</Suspense>
		</>
	);
}

export default App;
