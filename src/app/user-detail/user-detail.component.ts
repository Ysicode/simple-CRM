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
      console.log(this.userId)
      this.getUser();
    })
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges()
      .subscribe((user) => {
        this.user = new User(user);
        console.log('this is the user', this.userId)
      })
      console.log('Hello', this.user.firstName)
  }
 
    openDialog() {
      const dialog = this.dialog.open(DlogEditUserComponent);
      dialog.componentInstance.user = this.user;
  }

  calculateAge(birthday: any) {
    let timeDiffer = Date.now() - birthday;
    let ageDate = new Date(timeDiffer);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

}
