import { usePrevious } from "@mantine/hooks";
import { useMemo, useState } from "react";

export function useCarousel(arrayLength: number, numOfSlides = 1) {
	const [count, setCount] = useState(0);
	const prevCount = usePrevious(count);
	const dir =
		prevCount == 0 && count == arrayLength - 1
			? -1
			: prevCount == arrayLength - 1 && count == 0
			? 1
			: count > (prevCount ?? 0)
			? 1
			: -1;

	const incr = () => {
		if (count < arrayLength - 1) {
			setCount((prev) => prev + 1);
		} else {
			setCount(0);
		}
	};
	const decr = () => {
		if (count > 0) {
			setCount((prev) => prev - 1);
		} else {
			setCount(arrayLength - 1);
		}
	};
	const activeIndexs = useMemo(() => {
		const resualt: number[] = [];
		const recoution = () => {
			if (resualt.length < numOfSlides) {
				const index = count + resualt.length;
				if (index < arrayLength) {
					resualt.push(index);
					recoution();
				} else if (index >= arrayLength) {
					resualt.push(Math.abs(arrayLength - index));
					recoution();
				}
			}
		};
		recoution();
		return resualt;
	}, [count, arrayLength, numOfSlides]);

	return { incr, decr, dir, count, activeIndexs, prevCount };
}

export default useCarousel;
