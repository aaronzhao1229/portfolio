import * as React from 'react';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function SideLabel() {
  
  return (
    <Stack direction="row"  sx={{display: { xs: 'none', md: 'flex' }}}  >
      <Paper sx={{mt: 20, p: 0}} >
        <MenuList sx={{'& :hover': {color: 'secondary.main' }}}>
          <MenuItem >
            <LinkedInIcon fontSize='large' sx={{mt: 1, mb: 1}}/>
          </MenuItem>

          <MenuItem>
            <GitHubIcon fontSize='large' sx={{mt: 1, mb: 1}} />
          </MenuItem>
         
          <MenuItem>
            <YouTubeIcon fontSize='large' sx={{mt: 1, mb: 1}} />
          </MenuItem>
        </MenuList>
      </Paper>
      
 
    </Stack>
  );
}