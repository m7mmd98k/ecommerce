import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {
  todos: Todo[] = []; // Type the todos property as an array of Todo items
  url = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.http.get<{ todos: Todo[] }>(this.url).subscribe((data) => {
      console.info(data.todos);
      this.todos = data.todos;
    });
  }
}
