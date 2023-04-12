import SideLabel from '../layout/SideLabel'
import { Button, Grid, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <>
    
  <Grid container align="center">
    <Grid item xs={1}>
     <SideLabel />
    </Grid>
    <Grid item xs={10} sx={{mt: 20, p: 0}}>
      
          <Typography variant='h3' sx={{fontWeight: 'bold', mb: 4}}>
              Hi, I'm Aaron Zhao
          </Typography>
          <Typography variant='h6' sx={{ mb: 4}}>
          A highly motivated full stack software developer with a passion for technology and a track record of success in agile project management
          </Typography>
          <Button variant="contained" color='secondary' size='large' sx={{'&:hover': {color: 'primary'}, fontWeight: 'bold'}}>Projects</Button>
      
    </Grid>
    
    
  </Grid>
  
  </>
  )
}
