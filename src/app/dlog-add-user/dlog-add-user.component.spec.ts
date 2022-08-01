import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlogAddUserComponent } from './dlog-add-user.component';

describe('DlogAddUserComponent', () => {
  let component: DlogAddUserComponent;
  let fixture: ComponentFixture<DlogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlogAddUserComponent ]
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
