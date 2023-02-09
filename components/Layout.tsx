
import {ReactNode, ReactElement} from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import Style from '@styles/layout.module.scss'

export default function Layout({ children }: {children: ReactNode}): ReactElement {
  return (
    <>
    <main className={Style.layoutWrapper}>
      <main>
      <Navigation />
        {children}
    </main>
      <Footer />
      </main>
    </>
  )
}