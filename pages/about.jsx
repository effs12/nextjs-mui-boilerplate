import * as React from 'react'
import Head from 'next/head'
import { 
    Typography,
    Box,
    Button
} from '@mui/material'

import { DefaultLayout } from '../modules/layouts/default-layout'
import Link from '../modules/utils/Link';

const About = () => (
  (
    <>
      <Head>
        <title>
          Home | Material UI
        </title>
      </Head>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
      </Box>
    </>
  )
)

About.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
export default About