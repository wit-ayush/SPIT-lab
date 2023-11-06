import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentdisplayComponent } from './studentdisplay.component';

describe('StudentdisplayComponent', () => {
  let component: StudentdisplayComponent;
  let fixture: ComponentFixture<StudentdisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentdisplayComponent]
    });
    fixture = TestBed.createComponent(StudentdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
