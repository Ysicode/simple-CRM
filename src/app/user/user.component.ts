import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DlogAddUserComponent } from '../dlog-add-user/dlog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User();
 
  constructor(public dialog: MatDialog) { 
 
  }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DlogAddUserComponent);
  }

}
