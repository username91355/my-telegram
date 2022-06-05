import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';
import styles from './SmallPageContainer.module.css';
import Preloader from "../Preloader/Preloader";

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode
	isLoading: boolean
}

const SmallPageContainer: React.FC<IProps> = props => {

	const {children, isLoading} = props;

	return (
		<div className={styles.smallPageContainer}>
			{isLoading
				? <Preloader/>
				: children
			}
		</div>
	);
};

export default SmallPageContainer;