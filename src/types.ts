
type Confirmed = {
  value: number
    detail: string
}

type DailyTimeSeries = {
   pattern: string
    example: string
}


export type Data = {
    confirmed: Confirmed
    recovered: Confirmed
    deaths: Confirmed
    dailySummary?: string
    dailyTimeSeries?: DailyTimeSeries
    image?: string
    source?: string
    countries?: string
    countryDetail?: DailyTimeSeries
    lastUpdate: string
}