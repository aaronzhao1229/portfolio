import SideLabel from '../layout/SideLabel'
import { Button, Container, Grid, Typography } from '@mui/material'

export default function HomePage() {
  return (
  <Grid container>
    <Grid item xs={2}>
      <SideLabel />
    </Grid>
    <Grid item xs={10}>
      <Container>
          <Typography>
              Hi, I'm Aaron Zhao
          </Typography>
          <Typography>
              A full-stack software developer
          </Typography>
          <Button>Projects</Button>
      </Container>
    </Grid>
  </Grid>
  )
}
