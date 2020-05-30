import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'story-detail-dialog',
  templateUrl: 'story-detail-dialog.component.html',
  styles: [`
    .c-story__category {
      background-color: #e0e0e0;
      color: rgba(0,0,0,.87);
      transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
      display: inline-flex;
      padding: 6px 12px;
      border-radius: 16px;
      align-items: center;
      justify-content: center;
      cursor: default;
      min-height: 24px;
      min-width: 32px;
      height: 1px;
    }
  `]
})
export class StoryDetailDialogComponent {

  story: any;

  constructor(
    public dialogRef: MatDialogRef<StoryDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.story = data.story;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
