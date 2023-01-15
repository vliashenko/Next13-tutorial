import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'



export default function Home() {
  return (
    <main className={styles.main}>
      <div>I'am Main</div>
      <Link className='colored-button' href='/todos'>Todos</Link>
    </main>
  )
}
