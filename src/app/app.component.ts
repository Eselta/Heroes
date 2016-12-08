import { Component } from '@angular/core'

@Component ({
  selector: 'my-app',
  template: `
    <h1>{{titel}}</h1>
    <nav>
    <a routerLink="/dashboard">Dashboard</a>
    <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
`,
  styleUrls:['app.component.css'],
})

export class AppComponent
{
  title = "Tour Of Heroes";
}
