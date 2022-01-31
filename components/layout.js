import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const name = 'Adrian Lopez'
export const siteTitle = 'First Commit Project'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="This is a project builded with React JS, Next JS and Bootstrap "
        />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>

            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                image example
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}
