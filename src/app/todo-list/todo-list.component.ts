import { Component } from '@angular/core';
import { Todo } from '../model/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todoList:any= 'Todo List App';
  list:any[] = [];
  AddTask(item:string){
    this.list.push({id:this.list.length , name:item});
    console.warn(this.list);

  }
  removeItem(id:number){
    console.warn(id);
    this.list = this.list.filter(item=>item.id!==id);

  }


  todos: Todo[] = [
    { id: 1, title: 'Todo', completed: false },
    // { id: 2, title: 'Todo List app', completed: false }
  ];

  constructor() { }

  ngOnInit(): void { }

  editTodo(todo: Todo): void {
    todo.editing = true;
  }

  saveTodo(todo: Todo, newTitle: string): void {
    todo.title = newTitle;
    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.editing = false;
  }
}
