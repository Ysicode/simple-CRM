import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { MatDialogRef } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';

import { DlogAddUserComponent } from './dlog-add-user.component';

describe('DlogAddUserComponent', () => {
  let component: DlogAddUserComponent;
  let fixture: ComponentFixture<DlogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase)],
      declarations: [ DlogAddUserComponent ],
      providers: <any>  [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
