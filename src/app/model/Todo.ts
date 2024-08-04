export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    name: string;
    editing?: boolean; // Add an optional editing state
  }