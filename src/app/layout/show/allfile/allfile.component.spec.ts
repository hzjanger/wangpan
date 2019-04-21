import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllfileComponent } from './allfile.component';

describe('AllfileComponent', () => {
  let component: AllfileComponent;
  let fixture: ComponentFixture<AllfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
