import Styles from '@styles/header.module.scss'
import { ReactElement, ReactNode } from 'react'

export default function Header({ title, img, subtitle, children }: {title: string, img: string, subtitle?: string, children?: ReactNode}): ReactElement {
  return(
    <header className={Styles.header} style={{backgroundImage: `url(${img})` }}>
      <p className={Styles.subtitle}>{subtitle}</p>
      <h1 className="title">{title}</h1>
      {children}
    </header>
  )
}
