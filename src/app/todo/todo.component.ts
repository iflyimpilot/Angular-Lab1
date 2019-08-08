import { Component, OnInit } from "@angular/core";
import { todo } from "../interface/todo";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  toDos: todo[] = [
    { task: "Cook dinner", completed: true },
    { task: "Wash dishes", completed: true },
    { task: "Buy groceries", completed: false },
    { task: "Clean up", completed: true },
    { task: "Watch tv", completed: false },
    { task: "Reading", completed: true },
    { task: "Sleep", completed: true }
  ];

  constructor() {}

  removeItem(index: number): void {
    this.toDos.splice(index, 1);
  }

  ngOnInit() {}
}
