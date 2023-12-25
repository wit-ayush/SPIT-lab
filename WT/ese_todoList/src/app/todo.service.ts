import { Injectable } from '@angular/core';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: ToDo[] = [];

  getTodos(): ToDo[] {
    return this.todos;
  }

  addTodo(todo: ToDo): void {
    this.todos.push(todo);
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  
  updateStatus(id: number, status: 'pending' | 'inprogress' | 'done'): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.status = status;
    }
  }
}
