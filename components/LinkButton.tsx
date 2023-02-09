import {ReactNode, ReactElement} from 'react'
import Link from 'next/link'
import Styles from '@styles/linkbtn.module.scss'

const LinkButton = ({children, path, btnType}: {children?: ReactNode, path: string, btnType: string}): ReactElement => {
        if(btnType === 'primary'){
            return(
            <Link href={path} className={Styles.primary}>
                <button>
                    {children}
                </button>
             </Link>
            )
        }else{
            return(
                <Link href={path} className={Styles.secondary}>
                    <button>
                        {children}
                    </button>
                 </Link>
                )
        }
        
}

export default LinkButton
