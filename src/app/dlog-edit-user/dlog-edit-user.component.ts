import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dlog-edit-user',
  templateUrl: './dlog-edit-user.component.html',
  styleUrls: ['./dlog-edit-user.component.scss']
})
export class DlogEditUserComponent implements OnInit {
  birthdate: Date | any;
  loading = false;
  startDate = new Date(1990, 0, 1);
  user: User | any;
  userId: string | any;

  constructor(public dialogRef: MatDialogRef<DlogEditUserComponent>, private firestore: AngularFirestore) {
  }

  ngOnInit(): void {
  }

  saveUser() {
    this.loading = true;
    this.firestore
      .collection('users')
      .doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
  }

}
