import { ScoreBoardType } from '../../../api/fetchLeague'
import { Typography, Grid } from '@mui/material'
import React from 'react'
import styles from './index.module.scss'

const Score = (props:ScoreBoardType) => {
  return (
    <Grid container className={styles.container}>
      <Grid item xs={12} sx={{borderBottom:"solid 2px black"}}>
        <Grid container>
          <Grid item xs={5}>
            <Typography variant="h5">
                {props.homeTeam}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h5">
                vs
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5">
                {props.awayTeam}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={5}>
              <Typography variant="h5">
                  {props.homeTeamScore}
              </Typography>
            </Grid>
          <Grid item xs={2}>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5">
                {props.awayTeamScore}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Score