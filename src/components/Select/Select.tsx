import React, {DetailedHTMLProps, HTMLAttributes, useState, MouseEvent} from 'react';
import styles from './Select.module.css';
import {IoChevronDown, IoChevronUp} from "react-icons/io5";
import cn from 'classnames';

interface IProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	selected: string
	setSelected: (str: string) => void
	items: string[]
	label: string
}

const Select: React.FC<IProps> = props => {

	const {
		selected,
		setSelected,
		items,
		label,
		...restProps
	} = props;

	const firstShowItem = selected || items[0];

	const [selectedItem, setSelectedItem] = useState<string | null>(firstShowItem);
	const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

	const setSelectStatus = () => {
		setIsCollapsed(!isCollapsed)
	}

	const selectItem = (e: MouseEvent<HTMLElement>) => {
		setSelectedItem(e.currentTarget.getAttribute('data-value'));
		setSelected(e.currentTarget.getAttribute('data-value') || '');
	}

	return (
		<span
			tabIndex={0}
			className={cn(styles.selector, {
				[styles.uncollapsed]: !isCollapsed
			})}
			onClick={setSelectStatus}
			{...restProps}
		>
			{selectedItem}
			{!isCollapsed
				? <IoChevronDown/>
				: <IoChevronUp/>
			}
			{!isCollapsed &&
				<ul className={styles.selector__list}>
					{items.map(i => {
						return <li key={i}
								   data-value={i}
								   className={styles.selector__list_item}
								   onClick={(e) => selectItem(e)}
						>
							{i}
						</li>
					})}
				</ul>
			}
		</span>
	);
};

export default Select;