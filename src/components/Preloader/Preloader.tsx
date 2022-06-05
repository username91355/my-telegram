import React from 'react';
import loader from '../../assets/images/loader.gif';
import styles from './Preloader.module.css';

const Preloader: React.FC = () => {

	return <div
		className={styles.preloader}
	>
		<img
			className={styles.preloader__img}
			src={loader}
			alt={'pre-loader'}
		/>
	</div>
};

export default Preloader;