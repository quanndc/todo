import { TaskDialogData } from './../../../../models/task-dialog.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData) { }


    cancel(): void {
      this.data.task.title = this.backupTask.title;
      this.data.task.description = this.backupTask.description;
      this.dialogRef.close(this.data);
    }

  ngOnInit(): void {
  }

}
