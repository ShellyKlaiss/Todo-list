import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})


export class AppComponent {
  title = 'TODO LIST';


    Todos = [
{
    task: 'Workout',
    done: false,
    complete: true
},
{
  task: 'Grocery',
  done: true,
  complete: false
},
{
  task: 'Pay Bills',
  done: true,
  complete: true
},
{
  task: 'Edit 401k',
  done: false,
  complete: true
}
];


addTask(newToDoItem) {
 var newToDo = {
    task: newToDoItem,
    done: false,
    complete: true
  };
  this.Todos.push(newToDo);
}

removeTask(Todo) {
  this.Todos = this.Todos.filter( t => t.task !== Todo.task );
}
}