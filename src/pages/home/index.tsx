import React from 'react'
import styles from './index.module.scss'
import { 
    Box,
    Paper,
    Stack,
} from '@mui/material';
import  NavBarComponent  from '../components/navBarComponent'
import ScoreLeague from '../components/scoreLeague';
import { 
    fetchAllLeague,
} from '../api/fetchLeague';

const HomePage = () => {

    const league = fetchAllLeague()
    //here should have an Api to fetch leagues based on dates then return the league ID to the props for score League
    //can consider using getStaticPage to get the pages for it dynamically for performance
    return (
        <Box className={styles.container} sx={{width:{md:"80vw",lg:"50vw"}}} data-testid="home">
            <NavBarComponent />
            <Stack spacing={1} data-testid="scoreBoard">
                {league && league.map( (_details,index) => {
                    return <ScoreLeague key={index} leagueId={index} ></ScoreLeague>
                })}
            </Stack>
            <Paper elevation={1}/>
        </Box>
        
    )
}

export default HomePage