import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { ConnectionsComponent } from './components/user-profile/connections.component';
import { EmailSettingsComponent } from './components/user-profile/email-settings.component';
import { StoryListComponent } from './components/user-stories/story-list/story-list.component';
import { StoryDetailComponent } from './components/user-stories/story-detail/story-detail.component';
import { UserStoriesComponent } from './containers/user-stories/user-stories.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserProfileComponent,
    ConnectionsComponent,
    EmailSettingsComponent,
    StoryListComponent,
    StoryDetailComponent,
    UserStoriesComponent,
    UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
