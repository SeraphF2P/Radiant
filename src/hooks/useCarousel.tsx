import { usePrevious } from "@mantine/hooks";
import { useState } from "react";

type useCarouselProps<T> = {
	array: T[];
};

export function useCarousel<T>(array: T[]) {
	const [count, setCount] = useState(0);
	const prevCount = usePrevious(count);
	const [dir, setDir] = useState(count > prevCount ? 1 : -1);

	const incr = () => {
		if (count < array.length - 1) {
			setCount(count + 1);
		} else {
			setCount(0);
		}
		setDir(1);
	};
	const decr = () => {
		if (count > 0) {
			setCount(count - 1);
		} else {
			setCount(array.length - 1);
		}
		setDir(-1);
	};
	console.log(count);

	return { incr, decr, dir, count };
}

export default useCarousel;
