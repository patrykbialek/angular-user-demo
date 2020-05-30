import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoryListComponent {
  @Input() stories;
  @Output() showDetails = new EventEmitter();
  
  onShowDetails(story: any) {
    this.showDetails.emit(story);
  }
}
