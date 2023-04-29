import { ThunkAction } from 'redux-thunk'
import { ServerData, CurrenciesPayload, Currency } from '~/shared/models'
import { RootState } from '../index'
import { Unicodes } from '~/shared/initialData'

export const CURRENCIES_LOADING_START = 'CURRENCIES_LOADING_START'
export const CURRENCIES_LOADING_SUCCESS = 'CURRENCIES_LOADING_SUCCESS'
export const CURRENCIES_LOADING_END = 'CURRENCIES_LOADING_END'

interface CurrenciesLoadingStart {
  type: typeof CURRENCIES_LOADING_START
}

interface CurrenciesLoadingEnd {
  type: typeof CURRENCIES_LOADING_END
}

interface CurrenciesLoadingSuccess {
  type: typeof CURRENCIES_LOADING_SUCCESS
  payload: CurrenciesPayload
}

function currenciesLoadingStartActionCreator(): CurrenciesLoadingStart {
  return { type: CURRENCIES_LOADING_START }
}

function currenciesLoadingSuccessActionCreator(
  payload: CurrenciesPayload,
): CurrenciesLoadingSuccess {
  return { type: CURRENCIES_LOADING_SUCCESS, payload }
}

function currenciesLoadingEndActionCreator(): CurrenciesLoadingEnd {
  return { type: CURRENCIES_LOADING_END }
}

export function loadCurrenciesList(): ThunkAction<
  void,
  RootState,
  void,
  CurrencyActions
> {
  return async (dispatch) => {
    dispatch(currenciesLoadingStartActionCreator())

    const data: ServerData = await fetch(
      'https://www.cbr-xml-daily.ru/daily_json.js',
    ).then((res) => res.json())

    //заносим в список российский рубль, так как от сервера он не приходит
    const initialCurrency: Currency = {
      RUB: {
        Name: 'Российский рубль',
        CharCode: 'RUB',
        Icon: `flags/RUB.png`,
        Unicode: '&#8381;',
        HistoryRate: [
          {
            date: data.Date,
            value: 1,
          },
          {
            date: data.PreviousDate,
            value: 1,
          },
        ],
      },
    }

    dispatch(
      currenciesLoadingSuccessActionCreator({
        date: data.Date,
        currencies: Object.values(data.Valute).reduce((acc, item) => {
          return {
            ...acc,
            [item.CharCode]: {
              Name: item.Name,
              CharCode: item.CharCode,
              Icon: `flags/${item.CharCode}.png`,
              Unicode: Unicodes[item.CharCode] || '',
              HistoryRate: [
                {
                  date: data.Date,
                  value: item.Value / item.Nominal,
                },
                {
                  date: data.PreviousDate,
                  value: item.Previous / item.Nominal,
                },
              ],
            },
          }
        }, initialCurrency),
      }),
    )

    dispatch(currenciesLoadingEndActionCreator())
  }
}

export type CurrencyActions =
  | CurrenciesLoadingStart
  | CurrenciesLoadingEnd
  | CurrenciesLoadingSuccess
