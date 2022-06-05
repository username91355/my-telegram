import React, {useState} from 'react';
import './AuthStart.module.css';
import {FaTelegram} from 'react-icons/fa';
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input';
import styles from './AuthStart.module.css';

const AuthStart: React.FC = () => {

	const [telephoneNumber, setTelephoneNumber] = useState('')

	const inputHandler = (telNumber: string) => {
		setTelephoneNumber(telNumber);
	}

	const sendNumber = () => {
		console.log(telephoneNumber)
	}

	return (
		<div className={styles.settingsStart}>
			<FaTelegram
				color={'#0088CC'}
				size={'3em'}
			/>
			<h2>Ваш номер телефона</h2>
			<Input
				type={'tel'}
				value={telephoneNumber}
				handleChange={inputHandler}
			/>
			<p>* Пожалуйста, введите ваш номер телефона в формате +7 xxx-xxx-xx-xx</p>
			<Button
				mode={'primary'}
				title={'Далее'}
				onClick={sendNumber}
			/>
		</div>
	)
}

export default AuthStart;