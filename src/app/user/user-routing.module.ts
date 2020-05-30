import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';
import { UserStoriesComponent } from './containers/user-stories/user-stories.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-profile',
    pathMatch: 'full'
  },
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'user-stories',
        component: UserStoriesComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
