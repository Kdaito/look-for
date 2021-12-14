import React from 'react';
import Icon from '@mui/icons-material/AccountCircle';
import { Box, Typography } from '@mui/material';

const SidebarIcon: React.FC = () => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      py: '23px',
    }}
  >
    <Icon
      sx={{fontSize: '150px'}}
    />
    <Typography variant='h5'>小林大斗</Typography>
    <Typography>kobayashi hiroto</Typography>
  </Box>
);

export default SidebarIcon;