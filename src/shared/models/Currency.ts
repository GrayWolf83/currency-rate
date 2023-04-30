export interface Currency {
	[key: string]: CurrencyProps
}

export interface CurrenciesPayload {
	currencies: Currency
	date: string
}

export interface CurrencyProps {
	CharCode: string
	Name: string
	Icon: string
	Unicode: string
	HistoryRate: ExchangeRate[]
}

export interface ExchangeRate {
	date: string
	value: number
}
