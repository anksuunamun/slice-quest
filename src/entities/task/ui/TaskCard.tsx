import styles from './TaskCard.module.css';
import type { Task } from 'entities/task/model/types';
import React, { useCallback } from 'react';

interface TTaskCard extends Task {
    handleTaskRemove: (id: string) => void;
}

export const TaskCard = React.memo(({ title, completed, id, handleTaskRemove }: TTaskCard) => {
    const handleRemove = useCallback(() => handleTaskRemove(id), [id, handleTaskRemove]);

    return (
        <div className={styles.task}>
            <div className={styles.wrapper} id={id}>
                <span className={styles.title}>{title}</span>
                {completed ? (
                    <span className={styles.completed}>Ready</span>
                ) : (
                    <span className={styles.inProgress}>In progress</span>
                )}
            </div>
            {!completed && <button onClick={handleRemove}>ready</button>}
        </div>
    );
});
