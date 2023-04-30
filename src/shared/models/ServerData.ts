export interface ServerData {
	Date: string
	PreviousDate: string
	PreviousURL: string
	Timestamp: string
	Valute: Currency
}

interface Currency {
	ID: string
	NumCode: string
	CharCode: string
	Nominal: number
	Name: string
	Value: number
	Previous: number
}
