export interface ITaskList {
    id: string;
    name: string;
}

function createTaskList(id: string, name: string): ITaskList {
    return { id, name };
}
