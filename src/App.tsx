import Header from "./components/Header";
import Landing from "./sections/Landing";

function App() {
	return (
		<>
			<div className=" bg-stone-900  text-center text-xs font-semibold text-stone-200 sm:p-1">
				want 10% off your first purchse? code PUCHASE at checkout
			</div>
			<Header />
			<main>
				<Landing />
				<section className=" min-h-screen bg-green-400 "></section>
			</main>
		</>
	);
}

export default App;
