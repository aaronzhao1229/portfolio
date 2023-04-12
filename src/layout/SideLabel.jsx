import * as React from 'react'
import Paper from '@mui/material/Paper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import Stack from '@mui/material/Stack'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import YouTubeIcon from '@mui/icons-material/YouTube'


export default function SideLabel() {
  
  return (
    <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Paper sx={{ mt: 20, p: 0 }}>
        <MenuList sx={{ '& :hover': { color: 'secondary.main' } }}>
          <MenuItem>
            <LinkedInIcon
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/in/jian-aaron-zhao-15b61b11a/`
                )
              }
              fontSize="large"
              sx={{ mt: 1, mb: 1 }}
            />
          </MenuItem>
          <MenuItem>
            <GitHubIcon
              onClick={() => window.open(`https://github.com/aaronzhao1229`)}
              fontSize="large"
              sx={{ mt: 1, mb: 1 }}
            />
          </MenuItem>
          <MenuItem>
            <YouTubeIcon
              onClick={() =>
                window.open(
                  `https://www.youtube.com/channel/UCDgruhS_hmyWRDExmHbvfCg`
                )
              }
              fontSize="large"
              sx={{ mt: 1, mb: 1 }}
            />
          </MenuItem>
        </MenuList>
      </Paper>
    </Stack>
  )
}
