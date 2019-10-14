import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector; todo-list
  //todo com must be imorted in module component copy app.component info
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //[] leave empty
  
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

// filterTask(Todo) {
//   this.Todos = this.Todos.filter
// }
// completeTask(completeItem) {
//   this.Todos = this.Todos.filter(t.complete === false );
// }
}

//walk thru
// interface Todo {
//   task: string;
//   complete: boolean;
// }

//under component
// todos:Todo[]= [
//   {task: 'listitem', complete: true},
//   {task: 'listitem', complete: false},
//   {task: 'listitem', complete: true},
// ]}