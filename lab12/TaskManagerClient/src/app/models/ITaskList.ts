export interface ITaskList {
    id: string;
    name: string;
}

function createTaskList(id: string, name: string): ITaskList {
    return { id, name };
}

export interface ITaskListPost {
  name: string;
}

function createTaskListPost(name: string): ITaskListPost {
    return { name };
}
