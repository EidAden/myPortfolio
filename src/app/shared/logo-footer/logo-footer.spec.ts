import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFooter } from './logo-footer';

describe('LogoFooter', () => {
  let component: LogoFooter;
  let fixture: ComponentFixture<LogoFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
