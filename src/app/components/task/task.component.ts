import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {};
  @Output() edit = new EventEmitter();
  tasks: Task[] = [];
  constructor() {}

  ngOnInit(): void {}
}
