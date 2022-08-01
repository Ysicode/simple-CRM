import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dlog-add-user',
  templateUrl: './dlog-add-user.component.html',
  styleUrls: ['./dlog-add-user.component.scss']
})
export class DlogAddUserComponent implements OnInit {
  user: User = new User();
  birthdate: Date | any;
  loading = false;
  constructor( public dialogRef: MatDialogRef<DlogAddUserComponent>,private firestore: AngularFirestore) { }

  ngOnInit(): void {
  }

  save() {
    this.user.birthDate = this.birthdate.getTime();
    this.loading = true
    this.firestore.
      collection('user')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        this.dialogRef.close();
      });
  }

}
