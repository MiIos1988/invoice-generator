export const readFileAsDataURL = (file: File): Promise<string> => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result as string);
		reader.onerror = (error) => reject(error);
		reader.readAsDataURL(file);
	});
};

export const updateNestedField = <T extends object, K extends keyof T>(
	setState: React.Dispatch<React.SetStateAction<T>>,
	parentField: K,
	childField: keyof T[K],
	value: string | number
) => {
	setState((prev) => ({
		...prev,
		[parentField]: {
			...prev[parentField],
			[childField]: value,
		},
	}));
};
