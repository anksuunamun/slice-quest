import styles from './TaskCard.module.css';
import type { Task } from 'entities/task/model/types';

export const TaskCard = ({ title, completed, id }: Task) => {
    return (
        <div className={styles.wrapper} id={id}>
            <span className={styles.title}>{title}</span>
            {completed ? (
                <span className={styles.completed}>Ready</span>
            ) : (
                <span className={styles.inProgress}>In progress</span>
            )}
        </div>
    );
};
