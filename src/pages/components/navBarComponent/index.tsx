import { 
  Box, 
  Grid, 
  Typography,
  CardContent,
  Button, 
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import styles from './index.module.scss'

// luxon Date format
import { DateTime } from 'luxon'

const NavBarComponent = () => {
  /** States */
  const [isOpen, setIsOpen] = useState(false)

  const [dateFilter, setDateFilter] = useState(DateTime.now().toSQL())
  
  const [dateText, setDateText] = useState("Today")

  const handleClick = () =>{
    setIsOpen(!isOpen);
  }

  const handlePrevDate = () =>{
    const date = DateTime.fromSQL( dateFilter ).minus({day:1})
    setDateFilter(date.toSQL())
  }

  const handleNextDate = () =>{
    const date = DateTime.fromSQL( dateFilter ).plus({day:1})
    setDateFilter(date.toSQL())
  }


  useEffect(() => {
    // convert back from Date to luxon obj
    const currentDate = DateTime.now()
    const startDate = DateTime.fromSQL( dateFilter ).startOf("day")
    const endDate = DateTime.fromSQL( dateFilter ).endOf("day")

    if( currentDate >= startDate && currentDate <= endDate){
      setDateText("Today")
    }else{
      setDateText( DateTime.fromSQL( dateFilter ).toLocaleString().toString() )
    }
    
  }, [dateFilter])
  return (
    <>
      <CardContent>
        <Box className={styles.container} >
          <Grid container spacing={2}>
            <Grid className={styles.navigationButton} item xs={2}>
              <Button variant="outlined" onClick={()=>handlePrevDate()} className={styles.button} sx={{border:"none !important"}} data-testid="prevButton">
                <NavigateBeforeIcon />
              </Button>
            </Grid>
            <Grid className={styles.textMiddle} item xs={8}>
              <Button variant="outlined" onClick={()=>handleClick()} className={styles.button}>
                <Typography variant='h5' data-testid="dateFormat">
                  {dateText}
                </Typography>
                {isOpen ? (
                    <ArrowDropDownIcon className={styles.icon}/>
                ) : (
                  <ArrowDropUpIcon className={styles.icon} />
                )}
              </Button>
            </Grid>
            <Grid className={styles.navigationButton} item xs={2}>
              <Button variant="outlined" onClick={()=>handleNextDate()} className={styles.button} sx={{border:"none !important"}} data-testid="nextButton">
                <NavigateNextIcon />
              </Button>
            </Grid>
          </Grid>
        </Box>
      </CardContent>  
    </>
  )
}

export default NavBarComponent