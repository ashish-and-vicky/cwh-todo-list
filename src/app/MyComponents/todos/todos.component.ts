import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor() { 
    this.todos = [
      {
        sno: 1,
        title: 'Todo List',
        desc: 'This is my todo list',
        active: true
      },
      {
        sno: 2,
        title: 'Todo List',
        desc: 'This is my second todo list',
        active: true
      }
    ]
   }

  ngOnInit(): void {
  }

}
