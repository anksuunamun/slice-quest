import { type Filter, useTasks } from 'features/taskList/model/useTasks';
import { type Task } from 'entities/task/model/types';
import { TaskCard } from 'entities/task/ui/TaskCard';
import { FilterButton } from 'shared/ui/atoms/FilterButton/FilterButton';
import styles from './TaskList.module.css';

const initialTasks: Task[] = [
    { id: '1', title: 'Купить хлеб', completed: false },
    { id: '2', title: 'Сварить яйца', completed: true },
    { id: '3', title: 'Написать письмо', completed: false },
];

type TFilterButton = {
    id: Filter;
};

const filterButtons: TFilterButton[] = [
    {
        id: 'all',
    },
    {
        id: 'incomplete',
    },
    {
        id: 'completed',
    },
];

export const TaskList = () => {
    const { setFilter, filter, tasks, removeTask } = useTasks(initialTasks);

    return (
        <div>
            <div className={styles.wrapper}>
                <span>Filter: </span>
                {filterButtons.map(({ id }) => (
                    <FilterButton
                        key={id}
                        onClick={() => setFilter(id)}
                        title={id}
                        active={filter === id}
                    />
                ))}
            </div>
            <div className={styles.tasks}>
                {tasks.map(({ id, title, completed }) => (
                    <div key={id} className={styles.task}>
                        <TaskCard id={id} title={title} completed={completed} />
                        {!completed && <button onClick={() => removeTask(id)}>ready</button>}
                    </div>
                ))}
            </div>
        </div>
    );
};
