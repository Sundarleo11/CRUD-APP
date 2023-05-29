import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpolyeeDetailsComponent } from './update-empolyee-details.component';

describe('UpdateEmpolyeeDetailsComponent', () => {
  let component: UpdateEmpolyeeDetailsComponent;
  let fixture: ComponentFixture<UpdateEmpolyeeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEmpolyeeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpolyeeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
