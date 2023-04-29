export interface Valute {
	[key: string]: {
		ID: string
		NumCode: string
		CharCode: string
		Nominal: number
		Name: string
		Value: number
		Previous: number
	}
}
