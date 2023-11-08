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
    title: 'Lambda Trampers',
    description:
      'The Lambda Trampers and Lambda Latte Walkers are social tramping and walking groups for the LGBTQ+ community, and their friends, living in and around Christchurch. I am creatiing their new website',
    pictureUrl: '/images/projects/LambdaTramper.png',
    tech: [
      'Node.js',
      'JavaScript',
      'React',
      'Redux',
      'Bootstrape',
      'Axios',
      'AWS S3, EC2, Cloudfront, Route 53, SES',
    ],
    caseStudyLink:
      'http://lambdatramper-lb-1714983222.ap-southeast-2.elb.amazonaws.com',
  },
  {
    title: 'Home Base Enamel',
    description:
      'Home Base Enamels is a torch fired enamel jewellery store and I have created their e-commerce website from scratch using full-stack tools.',
    pictureUrl: '/images/projects/HomeBaseEnamels.png',
    tech: [
      'C#',
      '.NET framework',
      'TypeScript',
      'React',
      'Redux',
      'Material UI',
    ],
    caseStudyLink: 'https://homebaseenamels.fly.dev/',
  },
  {
    title: 'Te Araroa Planner',
    description:
      "This is my personal project to set up a planner for Te Araroa (New Zealand's long distance tramping route, stretching circa 3,000 kilometres along the length of the country's two main islands from Cape Reinga to Bluff).",
    pictureUrl: '/images/projects/TAPlanner.png',
    tech: ['JavaScript', 'Node.js', 'React', 'Redux', 'Tailwind'],
    caseStudyLink: 'https://www.youtube.com/watch?v=BOvJCkQsZYo',
  },
  {
    title: 'Lost & Found',
    description:
      'We built a Lost and Found application for our final project at Dev Academy.',
    pictureUrl: '/images/projects/LostAndFound.png',
    tech: ['JavaScript', 'Node.js', 'React', 'Redux', 'Tailwind'],
    caseStudyLink: 'https://www.youtube.com/watch?v=1NB-Vsm8bBs',
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
              borderBottomColor: 'primary.main',
            }}
          />
        </Grid>

        {projects.map((project) => (
          <>
            <Grid
              container
              key={project.title}
              alignItems="center"
              sx={{ mb: 6 }}
            >
              <Grid item xs={12} md={6}>
                <img
                  src={`${project.pictureUrl}`}
                  alt={`${project.title}`}
                  style={{
                    width: '100%',
                    objectFit: 'fill',
                    display: 'inline-block',
                  }}
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
                  sx={{ width: '100%', maxWidth: 360, pb: 1 }}
                  aria-label="contacts"
                >
                  <Grid container sx={{ pb: 4 }}>
                    {project.tech.map((tech) => (
                      <Grid item xs={6}>
                        <ListItem disablePadding>
                          <ListItemIcon>
                            <ArrowRightIcon sx={{ color: 'primary.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={`${tech}`} />
                        </ListItem>
                      </Grid>
                    ))}
                  </Grid>
                </List>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ '&:hover': { color: 'primary' }, fontWeight: 'bold' }}
                  onClick={() => window.open(`${project.caseStudyLink}`)}
                >
                  Case Study
                </Button>
              </Grid>
              <Divider
                sx={{
                  backgroundColor: 'primary.dark',
                  borderBottomWidth: 5,
                  borderBottomLength: 10,
                  borderBottomColor: 'primary.dark',
                }}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </Container>
  )
}
