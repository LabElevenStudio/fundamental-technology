import Link from 'next/link'
import {ReactNode, ReactElement} from 'react'

const TextButton = ({children, path}: {children: ReactNode, path: string}): ReactElement => {
    return(
        <Link href={path}>{children}</Link>
    )
}

export default TextButton