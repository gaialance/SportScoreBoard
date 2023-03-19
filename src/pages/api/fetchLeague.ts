export type ScoreBoardType = {
  homeTeam:string
  awayTeam:string
  homeTeamScore:number
  awayTeamScore:number
  date:Date
}

const defaultPremierScoreData:ScoreBoardType[] = [
  {
    homeTeam:"Nottom Forest",
    awayTeam:"Newcastle",
    homeTeamScore:2,
    awayTeamScore:4,
    date:new Date('2023-03-18 04:00:00 +08:00'),
  },
  {
    homeTeam:"Aston Villa",
    awayTeam:"Bournemouth",
    homeTeamScore:5,
    awayTeamScore:4,
    date:new Date('2023-03-18 05:00:00 +08:00'),
  },
  {
    homeTeam:"BrentFord",
    awayTeam:"Leicester",
    homeTeamScore:5,
    awayTeamScore:4,
    date:new Date('2023-03-18 10:00:00 +08:00'),
  }
]

const defaultChampionsScoreData:ScoreBoardType[] = [
  {
    homeTeam:"Nottom Forest",
    awayTeam:"Newcastle",
    homeTeamScore:2,
    awayTeamScore:4,
    date:new Date('2023-03-17 04:00:00 +08:00'),
  },
  {
    homeTeam:"Aston Villa",
    awayTeam:"Bournemouth",
    homeTeamScore:5,
    awayTeamScore:4,
    date:new Date('2023-03-17 05:00:00 +08:00'),
  },
  {
    homeTeam:"BrentFord",
    awayTeam:"Leicester",
    homeTeamScore:5,
    awayTeamScore:4,
    date:new Date('2023-03-17 10:00:00 +08:00'),
  }
]

export type League = {
  title:string
  scoreBoards?:ScoreBoardType[]
}

const defaultLeagueData:League[] = [
  {
    title:"Premier League",
    scoreBoards:defaultPremierScoreData
  },
  {
    title:"Champions League",
    scoreBoards:defaultChampionsScoreData,
  },
  {
    title:"Europa League"
  }
]



export function fetchOneLeague(
  leagueId:number
):League {
  return defaultLeagueData[leagueId]
}

export function fetchAllLeague(
):League[] {
  return defaultLeagueData
}

export function fetchAllScore(
  leagueId:number,
) {
  return defaultLeagueData[leagueId].scoreBoards
}

export function fetchOneScore(
  leagueId:number,
  scoreId:number,
) {
  if(defaultLeagueData[leagueId]?.scoreBoards){
    return defaultLeagueData[leagueId].scoreBoards?.at(scoreId)
  }
}
