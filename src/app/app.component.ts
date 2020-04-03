import { DataService } from './data.service';
import { User } from './user.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$: User[];
  constructor(private dataService: DataService){}
  ngOnInit() {
    return this.dataService.getUsers();
  }
  title = 'my-app';
}
