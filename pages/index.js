import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Stack, Button } from '@mui/material'

const Home = () => {
  return (
    <div className={styles.container}>
      ...
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Stack spacing={2} direction="row">
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </main>
    </div>
  )
}

export default Home
