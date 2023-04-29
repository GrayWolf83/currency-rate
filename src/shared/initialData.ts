import { ServerData } from './models'

export const initialData = {
	Date: '2023-04-29T11:30:00+03:00',
	PreviousDate: '2023-04-28T11:30:00+03:00',
	PreviousURL: '//www.cbr-xml-daily.ru/archive/2023/04/28/daily_json.js',
	Timestamp: '2023-04-28T20:00:00+03:00',
	Valute: {
		AUD: {
			ID: 'R01010',
			NumCode: '036',
			CharCode: 'AUD',
			Nominal: 1,
			Name: 'Австралийский доллар',
			Value: 53.2166,
			Previous: 54.0499,
		},
		AZN: {
			ID: 'R01020A',
			NumCode: '944',
			CharCode: 'AZN',
			Nominal: 1,
			Name: 'Азербайджанский манат',
			Value: 47.3584,
			Previous: 47.9765,
		},
		GBP: {
			ID: 'R01035',
			NumCode: '826',
			CharCode: 'GBP',
			Nominal: 1,
			Name: 'Фунт стерлингов Соединенного королевства',
			Value: 100.5883,
			Previous: 101.7218,
		},
		AMD: {
			ID: 'R01060',
			NumCode: '051',
			CharCode: 'AMD',
			Nominal: 100,
			Name: 'Армянских драмов',
			Value: 20.8228,
			Previous: 21.106,
		},
		BYN: {
			ID: 'R01090B',
			NumCode: '933',
			CharCode: 'BYN',
			Nominal: 1,
			Name: 'Белорусский рубль',
			Value: 27.5198,
			Previous: 27.7793,
		},
		BGN: {
			ID: 'R01100',
			NumCode: '975',
			CharCode: 'BGN',
			Nominal: 1,
			Name: 'Болгарский лев',
			Value: 45.4521,
			Previous: 46.0323,
		},
		BRL: {
			ID: 'R01115',
			NumCode: '986',
			CharCode: 'BRL',
			Nominal: 1,
			Name: 'Бразильский реал',
			Value: 16.0547,
			Previous: 16.1243,
		},
		HUF: {
			ID: 'R01135',
			NumCode: '348',
			CharCode: 'HUF',
			Nominal: 100,
			Name: 'Венгерских форинтов',
			Value: 23.7246,
			Previous: 24.1481,
		},
		VND: {
			ID: 'R01150',
			NumCode: '704',
			CharCode: 'VND',
			Nominal: 10000,
			Name: 'Вьетнамских донгов',
			Value: 34.0578,
			Previous: 34.5023,
		},
		HKD: {
			ID: 'R01200',
			NumCode: '344',
			CharCode: 'HKD',
			Nominal: 1,
			Name: 'Гонконгский доллар',
			Value: 10.2743,
			Previous: 10.4084,
		},
		GEL: {
			ID: 'R01210',
			NumCode: '981',
			CharCode: 'GEL',
			Nominal: 1,
			Name: 'Грузинский лари',
			Value: 32.2153,
			Previous: 32.5993,
		},
		DKK: {
			ID: 'R01215',
			NumCode: '208',
			CharCode: 'DKK',
			Nominal: 1,
			Name: 'Датская крона',
			Value: 11.9266,
			Previous: 12.0796,
		},
		AED: {
			ID: 'R01230',
			NumCode: '784',
			CharCode: 'AED',
			Nominal: 1,
			Name: 'Дирхам ОАЭ',
			Value: 21.9246,
			Previous: 22.2108,
		},
		USD: {
			ID: 'R01235',
			NumCode: '840',
			CharCode: 'USD',
			Nominal: 1,
			Name: 'Доллар США',
			Value: 80.5093,
			Previous: 81.5601,
		},
		EUR: {
			ID: 'R01239',
			NumCode: '978',
			CharCode: 'EUR',
			Nominal: 1,
			Name: 'Евро',
			Value: 88.3712,
			Previous: 90.2023,
		},
		EGP: {
			ID: 'R01240',
			NumCode: '818',
			CharCode: 'EGP',
			Nominal: 10,
			Name: 'Египетских фунтов',
			Value: 26.0588,
			Previous: 26.4002,
		},
		INR: {
			ID: 'R01270',
			NumCode: '356',
			CharCode: 'INR',
			Nominal: 100,
			Name: 'Индийских рупий',
			Value: 97.9978,
			Previous: 99.2656,
		},
		IDR: {
			ID: 'R01280',
			NumCode: '360',
			CharCode: 'IDR',
			Nominal: 10000,
			Name: 'Индонезийских рупий',
			Value: 54.5789,
			Previous: 54.8045,
		},
		KZT: {
			ID: 'R01335',
			NumCode: '398',
			CharCode: 'KZT',
			Nominal: 100,
			Name: 'Казахстанских тенге',
			Value: 17.6474,
			Previous: 17.9676,
		},
		CAD: {
			ID: 'R01350',
			NumCode: '124',
			CharCode: 'CAD',
			Nominal: 1,
			Name: 'Канадский доллар',
			Value: 59.1458,
			Previous: 59.8606,
		},
		QAR: {
			ID: 'R01355',
			NumCode: '634',
			CharCode: 'QAR',
			Nominal: 1,
			Name: 'Катарский риал',
			Value: 22.1179,
			Previous: 22.4066,
		},
		KGS: {
			ID: 'R01370',
			NumCode: '417',
			CharCode: 'KGS',
			Nominal: 100,
			Name: 'Киргизских сомов',
			Value: 91.9896,
			Previous: 93.1902,
		},
		CNY: {
			ID: 'R01375',
			NumCode: '156',
			CharCode: 'CNY',
			Nominal: 1,
			Name: 'Китайский юань',
			Value: 11.5659,
			Previous: 11.7609,
		},
		MDL: {
			ID: 'R01500',
			NumCode: '498',
			CharCode: 'MDL',
			Nominal: 10,
			Name: 'Молдавских леев',
			Value: 44.6889,
			Previous: 45.2734,
		},
		NZD: {
			ID: 'R01530',
			NumCode: '554',
			CharCode: 'NZD',
			Nominal: 1,
			Name: 'Новозеландский доллар',
			Value: 49.5615,
			Previous: 50.0127,
		},
		NOK: {
			ID: 'R01535',
			NumCode: '578',
			CharCode: 'NOK',
			Nominal: 10,
			Name: 'Норвежских крон',
			Value: 74.9677,
			Previous: 76.9224,
		},
		PLN: {
			ID: 'R01565',
			NumCode: '985',
			CharCode: 'PLN',
			Nominal: 1,
			Name: 'Польский злотый',
			Value: 19.2897,
			Previous: 19.6251,
		},
		RON: {
			ID: 'R01585F',
			NumCode: '946',
			CharCode: 'RON',
			Nominal: 1,
			Name: 'Румынский лей',
			Value: 17.9248,
			Previous: 18.2078,
		},
		XDR: {
			ID: 'R01589',
			NumCode: '960',
			CharCode: 'XDR',
			Nominal: 1,
			Name: 'СДР (специальные права заимствования)',
			Value: 108.7761,
			Previous: 110.2113,
		},
		SGD: {
			ID: 'R01625',
			NumCode: '702',
			CharCode: 'SGD',
			Nominal: 1,
			Name: 'Сингапурский доллар',
			Value: 60.3518,
			Previous: 61.0708,
		},
		TJS: {
			ID: 'R01670',
			NumCode: '972',
			CharCode: 'TJS',
			Nominal: 10,
			Name: 'Таджикских сомони',
			Value: 73.7629,
			Previous: 74.7271,
		},
		THB: {
			ID: 'R01675',
			NumCode: '764',
			CharCode: 'THB',
			Nominal: 10,
			Name: 'Таиландских батов',
			Value: 23.6008,
			Previous: 23.9243,
		},
		TRY: {
			ID: 'R01700J',
			NumCode: '949',
			CharCode: 'TRY',
			Nominal: 10,
			Name: 'Турецких лир',
			Value: 41.4403,
			Previous: 41.9971,
		},
		TMT: {
			ID: 'R01710A',
			NumCode: '934',
			CharCode: 'TMT',
			Nominal: 1,
			Name: 'Новый туркменский манат',
			Value: 23.0027,
			Previous: 23.3029,
		},
		UZS: {
			ID: 'R01717',
			NumCode: '860',
			CharCode: 'UZS',
			Nominal: 10000,
			Name: 'Узбекских сумов',
			Value: 70.6827,
			Previous: 71.6879,
		},
		UAH: {
			ID: 'R01720',
			NumCode: '980',
			CharCode: 'UAH',
			Nominal: 10,
			Name: 'Украинских гривен',
			Value: 21.8067,
			Previous: 22.0851,
		},
		CZK: {
			ID: 'R01760',
			NumCode: '203',
			CharCode: 'CZK',
			Nominal: 10,
			Name: 'Чешских крон',
			Value: 37.8209,
			Previous: 38.3145,
		},
		SEK: {
			ID: 'R01770',
			NumCode: '752',
			CharCode: 'SEK',
			Nominal: 10,
			Name: 'Шведских крон',
			Value: 78.2517,
			Previous: 79.0303,
		},
		CHF: {
			ID: 'R01775',
			NumCode: '756',
			CharCode: 'CHF',
			Nominal: 1,
			Name: 'Швейцарский франк',
			Value: 89.8541,
			Previous: 91.3839,
		},
		RSD: {
			ID: 'R01805F',
			NumCode: '941',
			CharCode: 'RSD',
			Nominal: 100,
			Name: 'Сербских динаров',
			Value: 75.6268,
			Previous: 76.878,
		},
		ZAR: {
			ID: 'R01810',
			NumCode: '710',
			CharCode: 'ZAR',
			Nominal: 10,
			Name: 'Южноафриканских рэндов',
			Value: 43.6831,
			Previous: 44.6139,
		},
		KRW: {
			ID: 'R01815',
			NumCode: '410',
			CharCode: 'KRW',
			Nominal: 1000,
			Name: 'Вон Республики Корея',
			Value: 60.1849,
			Previous: 60.9567,
		},
		JPY: {
			ID: 'R01820',
			NumCode: '392',
			CharCode: 'JPY',
			Nominal: 100,
			Name: 'Японских иен',
			Value: 60.0592,
			Previous: 61.016,
		},
	},
}
