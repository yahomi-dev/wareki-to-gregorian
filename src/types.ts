// 元号情報
interface EraInfo {
	readonly long: string;
	readonly short: string;
	readonly narrow: string;
	readonly start: Date;
	readonly end: Date;
}

// 入力ルール
interface InputRule {
	readonly matcher: RegExp;
	readonly parser: (match: RegExpExecArray) => Date;
}

// 出力フォーマッタ
interface OutputFormatter {
	readonly key: string;
	readonly format: (date: Date) => string;
}

export type { EraInfo, InputRule, OutputFormatter };
