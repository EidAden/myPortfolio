import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameProject } from './game-project';

describe('GameProject', () => {
  let component: GameProject;
  let fixture: ComponentFixture<GameProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
