const eras = {
	meiji: {
		long: "明治",
		short: "明治",
		narrow: "M",
		start: new Date(1868, 0, 25),
		end: new Date(1912, 6, 29),
	},

	taisho: {
		long: "大正",
		short: "大正",
		narrow: "T",
		start: new Date(1912, 6, 30),
		end: new Date(1926, 11, 24),
	},

	showa: {
		long: "昭和",
		short: "昭和",
		narrow: "S",
		start: new Date(1926, 11, 25),
		end: new Date(1989, 0, 7),
	},

	heisei: {
		long: "平成",
		short: "平成",
		narrow: "H",
		start: new Date(1989, 0, 8),
		end: new Date(2019, 3, 30),
	},

	reiwa: {
		long: "令和",
		short: "令和",
		narrow: "R",
		start: new Date(2019, 4, 1),
		end: new Date(9999, 11, 31),
	},
} as const;

type EraKey = keyof typeof eras;

type EraInfo = (typeof eras)[EraKey];

export { eras, type EraKey, type EraInfo };
