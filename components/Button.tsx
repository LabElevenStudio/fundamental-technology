import {ReactNode, ReactElement} from 'react'


type Button = {
    button,
    submit,
    reset
}



const Button = ({children, value} : {children?: ReactNode, value: string}): ReactElement => {
    return(
        <button value={value}>{children}</button>
    )
}


export default Button