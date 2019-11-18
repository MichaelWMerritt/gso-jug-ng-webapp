import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetupInfoComponent } from './meetup-info.component';

describe('MeetupInfoComponent', () => {
  let component: MeetupInfoComponent;
  let fixture: ComponentFixture<MeetupInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetupInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetupInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
