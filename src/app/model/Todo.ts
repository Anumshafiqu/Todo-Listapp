export interface Todo {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean; // Add an optional editing state
  }