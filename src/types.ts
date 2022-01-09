
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

type ConfirmedDaily = {
    total: number
    china: number
    outsideChina: number
}
export type Daily = {
    totalConfirmed: number
    mainlandChina: number
    otherLocations: number
    deltaConfirmed: number
    totalRecovered: number
    confirmed: ConfirmedDaily
    deltaConfirmedDetail: ConfirmedDaily
    deaths: ConfirmedDaily
    recovered:ConfirmedDaily
    active: number
    deltaRecovered: number
    incidentRate: number
    peopleTested: number
    reportDate: string
}
export type Countries = {
    name: string
    iso2: string
    iso3: string
}