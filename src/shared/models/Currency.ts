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
	HistoryRate: ExchangeRate[]
}

interface ExchangeRate {
	date: string
	value: number
}
