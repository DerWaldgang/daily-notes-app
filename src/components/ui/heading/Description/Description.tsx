import { FC } from 'react'
import parce from 'html-react-parser'
import cn from 'classnames'

import styles from './Description.module.scss' 

interface IDescription {
	text: string;
	className?: string 
}
const Description: FC<IDescription>= ({
	text,
	className = '',
}) => {
	return (
		<div className={cn(styles.Description, className)}>
			{parce(text)}
		</div>
	)
}

export default Description