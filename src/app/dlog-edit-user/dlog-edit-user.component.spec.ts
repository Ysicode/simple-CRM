import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlogEditUserComponent } from './dlog-edit-user.component';

describe('DlogEditUserComponent', () => {
  let component: DlogEditUserComponent;
  let fixture: ComponentFixture<DlogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlogEditUserComponent ]
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
