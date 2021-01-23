import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent implements OnInit {

  @Input() public user: any = {};

  constructor() { }

  ngOnInit(): void {
  }

}
