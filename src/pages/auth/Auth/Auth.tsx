import React, {useState} from 'react'
import './Auth.module.css'
import {FaTelegram} from 'react-icons/fa'
import Input from '../../../components/Input/Input'
import Button from "../../../components/Button/Button";
import styles from './Auth.module.css';

const Auth: React.FC = () => {

	const [phoneCode, setPhoneCode] = useState('')

	const codeInputHandler = (e: string) => {
		setPhoneCode(e)
	}

	const cancelAuth = () => {
		console.log('start')
	}

	const sendAuthData = () => {
		console.log('phone', 'phone_hash', phoneCode)
	}

	return (
		<div className={styles.settingsAuth__wrapper}>
			<div className={styles.settingsAuth}>
				<FaTelegram
					color={'#0088CC'}
					size={'3em'}
				/>
				<h2>Подтвердите номер</h2>
				<p>На ваше устройство был отправлен код подтверждения Telegram, введите его ниже.</p>
				<Input
					type={'text'}
					value={phoneCode}
					handleChange={codeInputHandler}
				/>
				<div className={styles.settingsAuth__controls}>
					<Button
						title={'Назад'}
						mode={'secondary'}
						onClick={cancelAuth}
					/>
					<Button
						title={'Отправить'}
						mode={'primary'}
						onClick={sendAuthData}
					/>
				</div>
			</div>
		</div>
	)
}

export default Auth