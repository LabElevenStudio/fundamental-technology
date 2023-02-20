import Link from 'next/link'
import {ReactNode, ReactElement} from 'react'
import Styles from '@styles/textlink.module.scss'

const TextButton = ({children, path}: {children: ReactNode, path: string}): ReactElement => {
    return(
        <Link className={Styles.link} href={path}>{children}</Link>
    )
}

export default TextButton