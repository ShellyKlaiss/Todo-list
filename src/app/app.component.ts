import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})


export class AppComponent {
  title = 'TODO LIST';


  Todos = [
    { task: 'Workout', complete: true },
    { task: 'Grocery', complete: false },
    { task: 'Pay Bills', complete: true },
    { task: 'Edit 401k', complete: true }
  ]


  filterText: string;

  filteredTodos = [...this.Todos];

  filterTodoList() {
    this.filteredTodos = this.Todos.filter(item => item.task === this.filterText);

    if (!this.filterText) {
      this.filteredTodos = [...this.Todos];
    };
  }

  addTask(newToDoItem) {
    var newToDo = {
      task: newToDoItem,
      complete: true
    };
    this.filteredTodos.push(newToDo);
  }
  
  removeTask(Todo) {
    this.filteredTodos = this.filteredTodos.filter(t => t.task !== Todo.task);
  }
}