import { fetchOneLeague, ScoreBoardType } from '../../api/fetchLeague';
import { Box, CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import styles from './index.module.scss'
import Score from './scores';
import AddScoreComponent from '../addScoreComponent';

// this page should get all the leageu related stuff
interface ScoreLeagueProps {
    leagueId:number;
}

const ScoreLeague = (props:ScoreLeagueProps) => {

  const league = fetchOneLeague(props.leagueId)

  // only sort the detail if have scoreboards
  let sortedList: any[] = []
  if(league?.scoreBoards && league.scoreBoards.length > 0){
    sortedList = league.scoreBoards.sort((_scoreA,_scoreB)=>{
      if( 
        (_scoreA.awayTeamScore + _scoreA.homeTeamScore)
        < 
        ( _scoreB.awayTeamScore + _scoreB.homeTeamScore ) 
      )
        return 1;
      if( 
        (_scoreA.awayTeamScore + _scoreA.homeTeamScore) 
        > 
        ( _scoreB.awayTeamScore + _scoreB.homeTeamScore )
      )
        return -1;

      if((_scoreA.awayTeamScore + _scoreA.homeTeamScore) === ( _scoreB.awayTeamScore + _scoreB.homeTeamScore ))
        if( _scoreA.date < _scoreB.date )
          return 1
        if( _scoreA.date > _scoreB.date)
          return -1
      // handle for date filter
      return 0
    })
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