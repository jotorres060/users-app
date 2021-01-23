import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UsersService } from '../../services/users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public users: User[] = [];
  public text: string = "";

  constructor(
    private _usersService: UsersService,
    private actRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((params) => {
      this.text = this.actRoute.snapshot.params.text;
      this.users = this._usersService.findUsers(params['text']);
    });
  }

  findUser(userText: string) {
    this.users = this._usersService.findUsers(userText);
    this.text = userText;
  }

}
