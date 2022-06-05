import React, { DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	title: string
	mode?: 'primary' | 'secondary'
	icon?: ReactNode
}

const Button: React.FC<IProps> = props => {

	const {
		title,
		mode = 'primary',
		icon,
		...restProps
	} = props;

	return <button
		className={cn(styles.btn, {
			[styles.primary]: mode === 'primary',
			[styles.secondary]: mode === 'secondary'
		})}
		{...restProps}
	>
		<div className={styles.btn__title}>
			{title}
			{icon}
		</div>
	</button>
};

export default Button;