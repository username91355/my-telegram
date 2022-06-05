import React from 'react';
import './App.module.css';
import styles from './App.module.css';
import AuthStart from "../auth/AuthStart/AuthStart";
import SmallPageContainer from '../../components/SmallPageContainer/SmallPageContainer';
import Auth from '../auth/Auth/Auth';
import AuthPassword from "../auth/AuthPassword/AuthPassword";
import {Route, Routes} from 'react-router-dom';
import Chat from "../chat/Chat";

function App() {
	return (
		<div className={styles.app}>
			<Routes>
				<Route path="/start" element={<SmallPageContainer isLoading={false}>
					<AuthStart/>
				</SmallPageContainer>}/>
				<Route path="/auth" element={<SmallPageContainer isLoading={false}>
					<Auth/>
				</SmallPageContainer>}/>
				<Route path="/password" element={<SmallPageContainer isLoading={false}>
					<AuthPassword/>
				</SmallPageContainer>}/>
				<Route path="/chat" element={<SmallPageContainer isLoading={false}>
					<Chat/>
				</SmallPageContainer>}/>
			</Routes>
		</div>
	);
}

export default App;
