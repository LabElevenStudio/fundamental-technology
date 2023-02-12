import {ReactNode, ReactElement} from 'react'
import Link from 'next/link'
import Styles from '@styles/linkbtn.module.scss'

const LinkButton = ({children, path, btnType}: {children?: string, path: string, btnType: string}): ReactElement => {
        if(btnType === 'primary'){
            return(
            <Link href={path} className={Styles.primary}>
                <button>
                    <span>
                    {children}
                    </span>
                </button>
             </Link>
            )
        }else if (btnType === 'secondary'){
            return(
                <Link href={path} className={Styles.secondary}>
                    <button>
                        <span>
                        {children}
                        </span>
                    </button>
                 </Link>
                )
        }else{
            return(
                <Link href={path} className={Styles.three}>
                    <button>
                        <span>
                        {children}
                        </span>
                    </button>
                 </Link>
                )
        }
        
}

export default LinkButton
