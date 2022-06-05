import React, {useState} from 'react'
import './AuthPassword.module.css'
import {FaTelegram} from 'react-icons/fa'
import Button from "../../../components/Button/Button";
import Input from '../../../components/Input/Input';
import styles from './AuthPassword.module.css';

const SettingsPassword = () => {
    const [password, setPassword] = useState('')

    const passwordChangeHandler = (e: string) => {
        setPassword(e)
    }

    const sendPassword = () => {
        console.log('PASSWORD: ', password)
    }

    const cancelEnter = () => {
        console.log('start')
    }

    return (
            <div className={styles.settingsPassword}>
                <FaTelegram
                    color={'#0088CC'}
                    size={'3em'}
                />
                <h2>Введите пароль</h2>
                <p>Введите пароль от вашего аккаунта Telegram</p>
                <Input
                    type={'password'}
                    value={password}
                    handleChange={passwordChangeHandler}
                />
                <div className={styles.settingsPassword__controls}>
                    <Button
                        title={'Отмена'}
                        mode={'secondary'}
                        onClick={cancelEnter}
                    />
                    <Button
                        title={'Отправить'}
                        onClick={sendPassword}
                    />
                </div>
            </div>
    )
}

export default SettingsPassword