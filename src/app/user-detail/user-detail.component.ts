import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DlogEditUserComponent } from '../dlog-edit-user/dlog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  userId: any = '';
  user: User = new User();
  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      this.getUser();
    })
  }

  getUser() {
    if (this.userId) {
      this.firestore
        .collection('users')
        .doc(this.userId)
        .valueChanges()
        .subscribe((user) => {
          this.user = new User(user);
        })
    }
  }

  openDialog() {
    const dialog = this.dialog.open(DlogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  calculateAge(birthday: any) {
    let timeDiffer = Date.now() - birthday;
    let ageDate = new Date(timeDiffer);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getBirthdate(birthday: any) {
    let date = new Date(birthday);
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();
      
    return dd + '/' + mm + '/' + yyyy;
  }

}
