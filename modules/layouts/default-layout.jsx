import { useState } from 'react';
import { 
  Box,
  Container,
} from '@mui/material'

import ProTip from '../components/ProTip'
import Copyright from '../components/Copyright'

export const DefaultLayout = (props) => {
  const { children } = props
  
  return (
    <>
      <Box component="main">
        <Container maxWidth="sm">
        {children}
        <ProTip />
        <Copyright />
      </Container>
      </Box>
    </>
  )
}