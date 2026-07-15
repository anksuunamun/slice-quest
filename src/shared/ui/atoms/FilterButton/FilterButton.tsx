import styles from './FilterButton.module.css';
import React from 'react';

type TFilterButton = {
    onClick: () => void;
    title: string;
    active: boolean;
};
export const FilterButton = React.memo(({ onClick, title, active }: TFilterButton) => {
    return (
        <button className={active ? styles.activeBtn : styles.nonActiveBtn} onClick={onClick}>
            {title}
        </button>
    );
});
