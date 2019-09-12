import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { users } from './users.data';
@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  users: User[] = users;

  ngOnInit() {
  }

}
