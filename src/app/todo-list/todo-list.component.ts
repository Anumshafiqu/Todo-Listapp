import { Component } from '@angular/core';

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
}
