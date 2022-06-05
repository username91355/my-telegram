import React, {ChangeEvent, DetailedHTMLProps, HTMLAttributes} from 'react';
import styles from './Input.module.css';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement> {
	type: string
	value: string
	handleChange: (str: string) => void
}

const Input: React.FC<IProps> = props => {

	const {
		type,
		value,
		onChange,
		handleChange,
		...restProps
	} = props;

	const inputValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange && onChange(e);
		handleChange && handleChange(e.target.value);
	}

	return (
		<input
			type={type}
			onChange={inputValueChangeHandler}
			className={styles.input}
			{...restProps}
		>

		</input>
	);
};

export default Input;