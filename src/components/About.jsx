import { Container, Grid, Typography, Divider, Box, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Link, useNavigate} from 'react-router-dom'

const skills = ['JavaScript (ES6+)', 'TypeScript','Node.js', 'C#', '.NET framework', 'React', 'Redux', 'AWS','MobX', 'Axios', 'Express.js', 'Jest', 'Supertest', 'Testing library', 'nock' ]

export default function About() {
  const navigate = useNavigate()
  return (
    <Container sx={{ pt: 10 }}>
      <Grid container>
        <Grid item xs={12} align="center" sx={{pb: 2}}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', pb: 2 }}>
            About Me
          </Typography>
          <Divider sx={{ backgroundColor: 'primary', borderBottomWidth: 5, borderBottomLength: 10, borderBottomColor: 'primary.main'}} />
        </Grid>

        <Grid item xs={12} md={6} sx={{pb: 2}}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 3 }}>
            Get to know me
          </Typography>
          <Typography variant="h6" sx={{pb: 2}}>
              A highly motivated <span style={{color: '#ff9800', fontWeight: 'bold'}}>full stack software developer</span> with a passion for technology and a track record of success in agile project management. Equipped with strong technical skills and a background in engineering, I am taking on new challenges and enhance my experience as a software developer.
          </Typography>
          <Typography variant="h6" sx={{pb: 2}}>
            After finishing a web development course at Dev Academy, I am doing freelance work as a software developer. Please check out some of work in the <Link to='/projects' style={{color: '#ff9800', fontWeight: 'bold', textDecoration: 'none'}}>Projects</Link> section.
          </Typography>
          <Typography variant="h6" sx={{pb: 2}}>
              I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
          </Typography>
          <Button onClick={() => navigate('/contact')} variant="contained" color='primary' size='large' sx={{'&:hover': {color: 'primary'}, fontWeight: 'bold'}}>Contact me</Button>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 3 }}>
            Skills
          </Typography>
          <Grid container spacing={2} xs={12} sx={{pb: 3}}>
            {skills.map((skill) => (
                <Grid item xs={4} key={skill}>
                    <Box sx={{backgroundColor: 'secondary.dark', borderRadius: '10px'}} align='center'>
                        <Typography sx={{p: 2}}>{skill}</Typography>
                    </Box>
                 </Grid>
            ))}
          </Grid>
          <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 1 }}>
            Certification
          </Typography>
          <List sx={{ width: '100%', maxWidth: 360, pb: 2 }} aria-label="contacts">
              <ListItem disablePadding>
                
                  <ListItemIcon>
                    <ArrowRightIcon sx={{color: 'primary.main'}}/>
                  </ListItemIcon>
                  <ListItemText primary="AWS Certified Cloud Practitioner" />
                
              </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  )
}
