import { Box } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../config/firebase';

const Home = () => {
  // untuk menampilkan current user
  // cek dokumentasi https://github.com/csfrequency/react-firebase-hooks/tree/master/auth#useauthstate
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ margin: 10 }}>
      Welcome to Mood Meter! <br/>
      Current user: {user.email}
    </Box>
  )
}

export default Home