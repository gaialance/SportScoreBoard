import React, { useState } from 'react'

import {
    Box,
    Button,
    CardContent,
    Dialog,
    DialogActions,
    DialogTitle,
    Grid,
    TextField,
    Typography,
    
} from '@mui/material'

import styles from './index.module.scss'
import { useForm } from 'react-hook-form'

type AddScoreComponentProps = {
    leagueId: number,
}

type inputProps = {
    homeTeamName:string
    awayTeamName:string
    homeTeamScore:number
    awayTeamScore:number
  }

const AddScoreComponent = (props:AddScoreComponentProps) => {

    // states
    const [isOpenDialog, setIsOpenDialog] = useState(false)

    const { register, handleSubmit, reset } = useForm<inputProps>();
    
    const handleOpenDialog = () => {
        setIsOpenDialog(true)
    }

    const handleCloseDialog = () => {
        setIsOpenDialog(false)
    }

    const onSubmit = (data:inputProps) => {
        // process the data
    
        // api call to submit or anything
        // console.log(data)
    
        // close the dialog
        reset()
        setIsOpenDialog(false);
      };

    return (
        <>
            <CardContent>
                <Grid container>
                    <Grid item xs={3} display="flex" alignItems="center" justifyContent="center">
                        <Button className={styles.button} sx={{marginLeft:'20px'}} onClick={()=>handleOpenDialog()}>
                        <Typography>
                            Create New
                        </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
            <Dialog onClose={handleCloseDialog} open={isOpenDialog} sx={{textAlign:"center"}}>
                <Box sx={{padding:"50px"}}>
                <DialogTitle>Create New Score</DialogTitle>
                <hr />
                <form onSubmit={handleSubmit(onSubmit)}>  
                    <Grid container>
                    <Grid item xs={5}>
                        <Typography variant="h6">Home Team</Typography>
                    </Grid>
                    <Grid item xs={2} >
                        <Typography variant="h5">VS</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h6">Away Team</Typography>
                    </Grid>
                    </Grid>
                    <Grid container>
                    <Grid item xs={5}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Home Team Name"
                        {...register("homeTeamName")}
                        type="string"
                        fullWidth
                        variant="standard"
                        required
                        />
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={5}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Away Team Name"
                        {...register("awayTeamName")}
                        type="string"
                        fullWidth
                        variant="standard"
                        required
                        />
                    </Grid>
                    </Grid>
                    <Grid container>
                    <Grid item xs={5}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="homeScore"
                        label="Home Score"
                        {...register("homeTeamScore")}
                        type="number"
                        fullWidth
                        variant="standard"
                        required
                        />
                    </Grid>
                    <Grid item xs={2} />
                    <Grid item xs={5}>
                        <TextField
                        autoFocus
                        margin="dense"
                        id="awayScore"
                        label="Away Score"
                        {...register("awayTeamScore")}
                        type="number"
                        fullWidth
                        variant="standard"
                        required
                        />
                    </Grid>
                    </Grid>
                    <DialogActions>
                    <Button className={styles.dialogButton} onClick={handleCloseDialog} >Cancel</Button>
                    <Button className={styles.dialogButton} onClick={handleSubmit(onSubmit)} >Submit</Button>
                    </DialogActions>
                </form>
                </Box>
            </Dialog>
        </>
    )
}

export default AddScoreComponent