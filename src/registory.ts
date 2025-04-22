import { eras } from "./eras";
import type { InputRule, OutputFormatter } from "./types";

// 入力ルール配列（初期設定：narrow 形式のみ）
const inputRules: InputRule[] = [
	{
		matcher: /^([A-Z])(\d{1,2})\/(\d{1,2})\/(\d{1,2})$/,
		parser: ([, eraSym, y, m, d]) => {
			const era = eras.find((e) => e.narrow === eraSym);

			if (!era) {
				throw new RangeError("Unknown era symbol");
			}

			// 西暦年 = era.start.getFullYear() + (入力年 - 1)
			const year = era.start.getFullYear() + Number(y) - 1;

			return new Date(year, Number(m) - 1, Number(d));
		},
	},
];

// 出力フォーマッタ（初期設定：YYYY/MM/DD）
const outputFormatters = new Map<string, OutputFormatter>([
	[
		"YYYY/MM/DD",
		{
			key: "YYYY/MM/DD",
			format: (date) => {
				const z = (n: number) => String(n).padStart(2, "0");
				return `${date.getFullYear()}/${z(date.getMonth() + 1)}/${z(date.getDate())}`;
			},
		},
	],
]);
