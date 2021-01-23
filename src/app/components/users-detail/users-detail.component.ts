import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  public id: number;
  public user: any;

  constructor(
    private _userService: UsersService,
    private actRoute: ActivatedRoute
  ) {
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.user = this._userService.getUser(this.id);
  }

}
