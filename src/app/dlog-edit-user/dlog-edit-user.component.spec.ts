import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { DlogEditUserComponent } from './dlog-edit-user.component';

describe('DlogEditUserComponent', () => {
  let component: DlogEditUserComponent;
  let fixture: ComponentFixture<DlogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([]), MatDialogModule, AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ DlogEditUserComponent ],
      providers: <any>  [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
