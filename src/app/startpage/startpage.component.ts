import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent implements OnInit {

  constructor(public router: Router) {
 
  }

  ngOnInit(): void {
  }

  start() {
    this.router.navigateByUrl('/dashboard');
  }
}
