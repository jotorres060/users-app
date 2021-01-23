import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  public users: User[] = [];

  constructor(
    private _usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.users = this._usersService.getUsers();
  }

  findUser(userText: string) {
    this.router.navigate(['/users/search', userText]);
  }

}
