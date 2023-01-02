import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestedCoursesComponent } from './requested-courses.component';

describe('RequestedCoursesComponent', () => {
  let component: RequestedCoursesComponent;
  let fixture: ComponentFixture<RequestedCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestedCoursesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestedCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
