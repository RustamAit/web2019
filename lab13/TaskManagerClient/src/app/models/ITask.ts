export interface ITask {
    id: number;
    name: string;
    created_at?: string;
    due_on?: string;
    status: string;
    task_list?: number;
}

function createTask(id: number, name: string, createdAt: string, dueOn: string, status: string, taskList: number): ITask {
    return {
      id,
      name,
      created_at: createdAt,
      due_on: dueOn,
      status,
      task_list: taskList
    };
}
