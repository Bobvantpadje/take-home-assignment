import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { CarList } from './components/CarList'

export default function Home() {
  return (
    <div className={styles.container}>
      <CarList cars={[]}/>
    </div>
  )
}
