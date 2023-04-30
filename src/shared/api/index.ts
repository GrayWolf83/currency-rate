export async function getCurrenciesList() {
    return await fetch(
        'https://www.cbr-xml-daily.ru/daily_json.js',
      ).then((res) => res.json())
}