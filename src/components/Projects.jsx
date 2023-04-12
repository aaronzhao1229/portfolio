import {
  Container,
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

const projects = [
  {
    title: 'Home Base Enamel',
    description:
      'Home Base Enamels is a torch fired enamel jewellery store and I created their e-commerce website from scratch using full-stack tools.',
    pictureUrl: '/images/projects/HomeBaseEnamels.png',
    tech: [
      'C#',
      '.NET framework',
      'TypeScript',
      'React',
      'Redux',
      'Material UI',
    ],
    caseStudyLink: 'https://home-base-enamels.fly.dev',
  },
]
export default function Projects() {
  return (
    <Container sx={{ pt: 10 }}>
      <Grid container>
        <Grid item xs={12} align="center" sx={{ pb: 5 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', pb: 2 }}>
            Projects
          </Typography>
          <Divider
            sx={{
              backgroundColor: 'secondary',
              borderBottomWidth: 5,
              borderBottomLength: 10,
              borderBottomColor: 'secondary.main',
            }}
          />
        </Grid>

        {projects.map((project) => (
          <Grid container key={project.title}>
            <Grid item xs={12} md={6}>
              <img
                src={`${project.pictureUrl}`}
                alt={`${project.title}`}
                style={{ width: '100%', objectFit: 'fill' }}
              />
            </Grid>
            <Grid item xs={1} md={1}></Grid>
            <Grid item xs={12} md={5} sx={{ pb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', pb: 3 }}>
                {project.title}
              </Typography>
              <Typography variant="h6" sx={{ pb: 2 }}>
                {project.description}
              </Typography>
              <Typography variant="h6" sx={{ pb: 0 }}>
                Associated Tech:
              </Typography>
              <List
                sx={{ width: '100%', maxWidth: 360, pb: 2 }}
                aria-label="contacts"
              >
                <Grid container>
                  {project.tech.map((tech) => (
                    <Grid item xs={6}>
                      <ListItem disablePadding>
                        <ListItemIcon>
                          <ArrowRightIcon sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                        <ListItemText primary={`${tech}`} />
                      </ListItem>
                    </Grid>
                  ))}
                </Grid>
              </List>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{ '&:hover': { color: 'primary' }, fontWeight: 'bold' }}
                onClick={() =>
                  window.open(
                    `${project.caseStudyLink}`
                  )
                }
              >
                Case Study
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
