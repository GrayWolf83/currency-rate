export interface Valute {
  [key: string]: ValuteProps
}
export interface ValuteProps {
  ID: string
  NumCode: string
  CharCode: string
  Nominal: number
  Name: string
  Value: number
  Previous: number
}
