import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { useNavigate } from 'react-router-dom'

const pages = ['Home', 'About', 'Projects', 'Contact']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const navigate = useNavigate()
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const navigateTo = (page) => {
    if (page === 'Home') {
      navigate(`/`)
    } else {
      navigate(`${page.toLowerCase()}`)
    }
  }

  return (
    <AppBar position="static" elevation={0} color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            onClick={() => navigate(`/about`)}
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            <IconButton>
              <Avatar alt="Aaron Zhao" src="/images/profile.jpeg" />
            </IconButton>
            <Button
              variant="body1"
              sx={{
                my: 2,
                color: 'primary.contrastText',
                display: { xs: 'none', md: 'flex', fontWeight: 'bold' },
                pl: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Aaron Zhao
              </Typography>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => navigateTo(page)}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              // <Tooltip key={page} disableHoverListener title="Add">
              <Button
                key={page}
                onClick={() => navigateTo(page)}
                sx={{
                  color: 'primary.contrastText',
                  '& :hover': { color: 'primary.main' },
                  display: 'block',
                  fontWeight: 'bold',
                  pr: 2,
                  fontSize: 'body1.fontSize',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  {page}
                </Typography>
              </Button>
              // </Tooltip>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
