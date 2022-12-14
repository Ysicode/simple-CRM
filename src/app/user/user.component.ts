import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DlogAddUserComponent } from '../dlog-add-user/dlog-add-user.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User();
  allUsers = [];
 
  constructor(public dialog: MatDialog, private firestore: AngularFirestore) { 
 
  }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'customIdName'})
    .subscribe((changes: any) => {
      this.allUsers = changes;
    })
  }

  openDialog() {
    this.dialog.open(DlogAddUserComponent);
  }

  calculateAge(birthday: any) {
    let timeDiffer = Date.now() - birthday;
    let ageDate = new Date(timeDiffer);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}

 