import {
  TaskDialogComponent,
  TaskDialogResult,
} from './../../components/task-dialog/task-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/components/task/task.model';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent implements OnInit {
  task: Task = {};
  tasks: Task[] = [
    {
      id: '1',
      name: 'buy milk',
      description: 'Go to the store and buy milk',
      dueDate: '2021-03-14',
    },
    {
      id: '2',
      name: 'buy bread',
      description: 'Go to the store and buy bread',
      dueDate: '2021-03-14',
    },
  ];
  inProgress: Task[] = [
    {
      id: '1',
      name: 'buy cereal',
      description: 'Go to the store and buy milk',
      dueDate: '2021-03-14',
    },
    {
      id: '2',
      name: 'buy cheese',
      description: 'Go to the store and buy bread',
      dueDate: '2021-03-14',
    },
  ];
  done: Task[] = [
    {
      id: '1',
      name: 'buy something',
      description: 'Go to the store and buy milk',
      dueDate: '2021-03-14',
    },
    {
      id: '2',
      name: 'buy nothing',
      description: 'Go to the store and buy bread',
      dueDate: '2021-03-14',
    },
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  edit(list: string, task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: {
        task: {
          name: this.task.name,
          description: this.task.description
        }
      },
    });
    dialogRef
      .afterClosed()
      // tslint:disable-next-line: deprecation
      .subscribe((result: TaskDialogResult) => this.tasks.push(result.task));
  }
  addTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      // tslint:disable-next-line: deprecation
      .subscribe((result: TaskDialogResult) => this.tasks.push(result.task));
  }
}
