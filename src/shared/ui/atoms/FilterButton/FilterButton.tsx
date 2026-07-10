import styles from './FilterButton.module.css';

type TFilterButton = {
    onClick: () => void;
    title: string;
    active: boolean;
};
export const FilterButton = ({ onClick, title, active }: TFilterButton) => {
    return (
        <button className={active ? styles.activeBtn : styles.nonActiveBtn} onClick={onClick}>
            {title}
        </button>
    );
};
