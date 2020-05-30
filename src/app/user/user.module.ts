import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { ConnectionsComponent } from './components/user-profile/connections.component';
import { EmailSettingsComponent } from './components/user-profile/email-settings.component';
import { StoryListComponent } from './components/user-stories/story-list/story-list.component';
import { UserStoriesComponent } from './containers/user-stories/user-stories.component';
import { UserComponent } from './user.component';
import { StoryDetailDialogComponent } from './components/user-stories/story-detail/story-detail-dialog.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    ConnectionsComponent,
    EmailSettingsComponent,
    StoryListComponent,
    UserStoriesComponent,
    UserComponent,
    StoryDetailDialogComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatChipsModule,

    UserRoutingModule,
  ],
  entryComponents: [
    StoryDetailDialogComponent,
  ]
})
export class UserModule { }
