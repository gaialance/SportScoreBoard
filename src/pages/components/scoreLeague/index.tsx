import { fetchOneLeague, League, ScoreBoardType } from '../../api/fetchLeague';
import { Box, CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import styles from './index.module.scss'
import Score from './scores';
import AddScoreComponent from '../addScoreComponent';

// this page should get all the leageu related stuff
interface ScoreLeagueProps {
    leagueId:number;
}

export const sortScore = ( scores:ScoreBoardType[] ): ScoreBoardType[] => {
  scores.sort( (_scoreA , _scoreB) => { 

    // sorting based on the totalscore which is awayTeamScore and homeTeamScore A < B return 1 will go behind
    if( 
      (_scoreA.awayTeamScore + _scoreA.homeTeamScore)
      < 
      ( _scoreB.awayTeamScore + _scoreB.homeTeamScore ) 
    )
      return 1;

    // if B > A -1 means a infront
    if( 
      (_scoreA.awayTeamScore + _scoreA.homeTeamScore) 
      > 
      ( _scoreB.awayTeamScore + _scoreB.homeTeamScore )
    )
      return -1;

    // here is when the both team have the same score then we sort via dates
    if((_scoreA.awayTeamScore + _scoreA.homeTeamScore) === ( _scoreB.awayTeamScore + _scoreB.homeTeamScore ))

      // if Date A < Date b return 1
      if( _scoreA.date < _scoreB.date )
        return 1

      // if Date A > Date B return -1 
      if( _scoreA.date > _scoreB.date)
        return -1
    
    return 0
   })

  return scores;
}

const ScoreLeague = (props:ScoreLeagueProps) => {

  const league = fetchOneLeague(props.leagueId)

  // only sort the detail if have scoreboards
  let sortedList: any[] = []
  if(league?.scoreBoards && league.scoreBoards.length > 0){
    sortedList = sortScore(league.scoreBoards)
  }
  return (
    <CardContent>
      <Box className={styles.container}>
        <Stack direction="column" alignItems="center">
          <Typography variant='h4' data-testid="title">{league.title}</Typography>
          <Stack direction="column" sx={{width:"100%",textAlign:"center"}} data-testid="ScoreBoard-1">
            {sortedList.length > 0 ? (
              sortedList.map((_score,index)=>{
                return (
                  <Score key={index} {..._score}></Score>
                )
              })
            ) : (
              <Typography variant='h5'>There is no game at the moment</Typography>
            )}
            {sortedList.length > 0 && (
              <AddScoreComponent leagueId={props.leagueId}/>
            )}
          </Stack>
        </Stack>
      </Box>
    </CardContent>
  )
}

export default ScoreLeague