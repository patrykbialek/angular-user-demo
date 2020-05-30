import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { StoryDetailDialogComponent } from '../../components/user-stories/story-detail/story-detail-dialog.component';

export interface Feed {
  url: string;
  title: string;
  link: string;
  author: string;
  description: string;
  image: string;
}

export interface Item {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
  enclosure: any;
  categories: string[];
}

export interface RootObject {
  status: string;
  feed: Feed;
  items: Item[];
}
@Component({
  selector: 'app-user-stories',
  templateUrl: './user-stories.component.html',
})
export class UserStoriesComponent implements OnInit {

  stories$: Observable<Item[]> = of([
    {
      title: '6 Pure Angular Pipes for Human-Readable UI',
      pubDate: '2020-05-27 08:27:38',
      link: 'https://medium.com/kaft/czym-jest-elasticsearch-i-dlaczego-warto-go-u%C5%BCy%C4%87-da5cd29f6a83?source=rss----f7004b8e63e4---4',
      guid: 'https://medium.com/p/da5cd29f6a83',
      author: 'Lewis Fairweather',
      thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*CNUQHO6MtkjMIGMR5Qw4Sg.png',
      description: 'Forms are pretty much always harder than they look. Especially in today’s complex web experience. There are several different types of forms with lots of interaction that takes place behind the scenes. User logins, shopping carts, and social media profiles just to name a few.I wanted to demonstrate how to achieve a specific scenario that might not be as straight forward with Angular forms. Using child components.',
      content: 'Forms are pretty much always harder than they look. Especially in today’s complex web experience. There are several different types of forms with lots of interaction that takes place behind the scenes. User logins, shopping carts, and social media profiles just to name a few.<br><br>I wanted to demonstrate how to achieve a specific scenario that might not be as straight forward with Angular forms. Using child components.',
      enclosure: {},
      categories: [
        'angular',
        'pipe',
        'ui',
        'front-end'
      ]
    },
    {
      title: 'Migrating from NGRX to NGXS in Angular 6',
      pubDate: '2020-05-27 06:46:02',
      link: 'https://medium.com/kaft/dlaczego-w-projektach-korzystamy-z-gitlab-ci-3bf27f12a498?source=rss----f7004b8e63e4---4',
      guid: 'https://medium.com/p/3bf27f12a498',
      author: 'Lewis Fairweather',
      thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*AIA_6ofNLcAsrDqcwiCymg.jpeg',
      description: 'As you can see there is a lot of overlap here. The key differences are handling side-effects, the use of decorators, and state mutations. In NGRX those are handled separately in reducers for state change, and effects for handling side-effects.NGXS combines that together inside the “State” class. Which is a better method in my opinion. Also, the way NGXS utilizes TypeScript decorators really cleans up the code base and makes it feel like Angular. There are several other differences as well but these are the main ones. One way to think about refactoring is to think about the how you would start something from scratch. Ask yourself, “If I did not already have NGRX in this application, what would I do at this step?”. That will always keep you on track during the refactoring process. For example, the best place to start when adding a new library in Angular is to add it to your module imports array!',
      content: 'As you can see there is a lot of overlap here. The key differences are handling side-effects, the use of decorators, and state mutations. In NGRX those are handled separately in reducers for state change, and effects for handling side-effects. <br><br>NGXS combines that together inside the “State” class. Which is a better method in my opinion. Also, the way NGXS utilizes TypeScript decorators really cleans up the code base and makes it feel like Angular. There are several other differences as well but these are the main ones. One way to think about refactoring is to think about the how you would start something from scratch. Ask yourself, “If I did not already have NGRX in this application, what would I do at this step?”. That will always keep you on track during the refactoring process. For example, the best place to start when adding a new library in Angular is to add it to your module imports array!',
      enclosure: {},
      categories: [
        'ngrx',
        'big-data',
        'angular',
        'devops'
      ]
    },
  ]).pipe(delay(1000));

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit() {}

  showDetails(story: Item) {
    const dialogRef = this.dialog.open(StoryDetailDialogComponent, {
      width: '640px',
      disableClose: true,
      data: {
        story
      }
    });

    dialogRef.afterClosed().subscribe();
  }

}
