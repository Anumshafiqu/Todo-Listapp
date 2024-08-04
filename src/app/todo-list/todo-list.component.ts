import { Component } from '@angular/core';
// import { Todo } from '../model/Todo';
interface Todo {
  id: number;
  name: string;
  editing: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  // item:any;
  // todoList:any= 'Todo List App';
  // list:any[] = [];
  // AddTask(item:string){
  //   this.list.push({id:this.list.length , name:item});
  //   console.warn(this.list);

  // }
  // removeItem(id:number){
  //   console.warn(id);
  //   this.list = this.list.filter(item=>item.id!==id);

  // }


  // todos: Todo[] = [
  //   { id: 1, title: 'Todo', completed: false },
  //   // { id: 2, title: 'Build a to-do app', completed: false }
  // ];

  // constructor() { }

  // ngOnInit(): void { }

  // editTodo(todo: Todo): void {
  //   this.todos.forEach(t => t.editing = false); // Set editing to false for all items
  //   todo.editing = true; // Set editing to true for the selected item
  // }

  // saveTodo(todo: Todo): void {
  //   todo.editing = false; // Reset the editing state
  // }

  // cancelEdit(todo: Todo): void {
  //   todo.editing = false; // Reset the editing state
  // }

  // addTodo(title: string): void {
  //   if (title) {
  //     this.todos.push({ id: this.todos.length + 1, title: title, completed: false });
  //   }
  // }

  // removeTodo(todo: Todo): void {
  //   this.todos = this.todos.filter(t => t !== todo);
  // }



  todos: Todo[] = [];
  todoList = "Todo List App";

  constructor() { }

  ngOnInit(): void { }

  addTask(name: string): void {
    if (name) {
      this.todos.push({ id: this.todos.length + 1, name: name, editing: false });
    }
  }

  editTodo(todo: Todo): void {
    this.todos.forEach(t => t.editing = false); // Set editing to false for all items
    todo.editing = true; // Set editing to true for the selected item
  }

  saveTodo(todo: Todo): void {
    todo.editing = false; // Reset the editing state
  }

  cancelEdit(todo: Todo): void {
    todo.editing = false; // Reset the editing state
  }

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}
