import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentFormComponent } from './studentform.component';


describe('StudentformComponent', () => {
  let component: StudentFormComponent;
  let fixture: ComponentFixture<StudentFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentFormComponent]
    });
    fixture = TestBed.createComponent(StudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
