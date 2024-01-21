import { Component, OnInit } from '@angular/core';
import { ToDo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [];
  newTodoText = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoText.trim() !== '') {
      const newTodo: ToDo = {
        id: Date.now(),
        text: this.newTodoText,
        status: 'pending',
      };
      this.todoService.addTodo(newTodo);
      this.loadTodos(); 
      this.newTodoText = '';
    }
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
    this.loadTodos(); 
  }

  updateStatus(id: number, status: 'pending' | 'inprogress' | 'done'): void {
    this.todoService.updateStatus(id, status);
    this.loadTodos(); 
  }

  formatTime(id: number): string {
    const date = new Date(id);
    return `${date.getHours()}:${date.getMinutes()}`;
  }
}

