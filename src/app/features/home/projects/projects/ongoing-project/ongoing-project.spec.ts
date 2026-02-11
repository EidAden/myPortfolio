import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingProject } from './ongoing-project';

describe('OngoingProject', () => {
  let component: OngoingProject;
  let fixture: ComponentFixture<OngoingProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OngoingProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OngoingProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
