import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

import styles from './Button.module.scss' 

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{}

const Button: FC<IButton> = ({children, className, ...rest}) => {
    return <button className={cn(styles.Button, className)} {...rest}>{children}</button>
}

export default Button