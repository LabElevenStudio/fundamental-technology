import Styles from '@styles/header.module.scss'
import { ReactElement, ReactNode } from 'react'

export default function Header({ title, img}: {title: string, img: string, subtitle?: string}): ReactElement {
  return(
    <header className={Styles.header} style={{backgroundImage: `url(${img})` }}>
      <h1 className="title">{title}</h1>
    </header>
  )
}