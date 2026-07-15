import { useMemo, useState } from 'react';
import type { Task } from 'entities/task/model/types';

export type Filter = 'all' | 'completed' | 'incomplete';

interface UseTasksReturn {
    tasks: Task[];
    filter: Filter;
    setFilter: (f: Filter) => void;
    removeTask: (id: string) => void;
}
export function useTasks(initial: Task[]): UseTasksReturn {
    const [tasks, setTasks] = useState<Task[]>(initial);
    const [filter, setFilter] = useState<Filter>('all');

    const filteredTasks = useMemo(() => {
        switch (filter) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'incomplete':
                return tasks.filter(task => !task.completed);
            case 'all':
                return tasks;
        }
    }, [tasks, filter]);

    const removeTask = (id: string) => {
        setTasks(prev => prev.map(i => (i.id === id ? { ...i, completed: true } : i)));
    };

    return {
        tasks: filteredTasks,
        filter,
        setFilter,
        removeTask,
    };
}
