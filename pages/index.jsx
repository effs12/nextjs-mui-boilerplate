import * as React from 'react'
import Head from 'next/head'
import { 
    Typography,
    Box,
} from '@mui/material'

import { DefaultLayout } from '../modules/layouts/default-layout'
import Link from '../modules/utils/Link';

const Index = () => (
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
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </>
  )
)

Index.getLayout = (page) => (
  <DefaultLayout>
    {page}
  </DefaultLayout>
)
export default Index