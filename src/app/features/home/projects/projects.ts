import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameProject } from './projects/game-project/game-project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, GameProject],
  templateUrl: './projects.html',
  styleUrls: ['./projects.scss'],
})
export class Projects {
  active = 'game';

  select(tab: string) {
    this.active = tab;
  }
}
