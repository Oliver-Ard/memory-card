function shuffleArray<T>(array: T[]): T[] {
	const newArray = [...array];

	for (let i = newArray.length - 1; i > 0; i -= 1) {
		const random = Math.floor(Math.random() * (i + 1));

		[newArray[i], newArray[random]] = [newArray[random], newArray[i]];
	}

	return newArray;
}

export default shuffleArray;
