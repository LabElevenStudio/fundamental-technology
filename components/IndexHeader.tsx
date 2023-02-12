import Styles from '@styles/indexheader.module.scss'
import { ReactElement, ReactNode } from 'react'

export default function IndexHeader({ title, img, subtitle, children }: {title: string, img: string, subtitle?: string, children?: ReactNode}): ReactElement {
  return(
    <header className={Styles.header} style={{backgroundImage: `url(${img})` }}>
      <h1 className="title">{title}</h1>
      <p className={Styles.subtitle}>{subtitle}</p>
      {children}
    </header>
  )
}
