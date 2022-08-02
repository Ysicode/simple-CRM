import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dlog-edit-user',
  templateUrl: './dlog-edit-user.component.html',
  styleUrls: ['./dlog-edit-user.component.scss']
})
export class DlogEditUserComponent implements OnInit {
  loading = false;
  user: User = new User();

  constructor(public dialogRef: MatDialogRef<DlogEditUserComponent>) { 
  }

  ngOnInit(): void {
  }

  saveUser() {

  }

}
