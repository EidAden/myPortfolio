import { Component } from '@angular/core';
import { SocialIcons } from '../../../shared/ui/social-icons/social-icons';
import { ScrollIndicator } from '../../../shared/ui/scroll-indicator/scroll-indicator';

@Component({
  selector: 'app-hero',
  imports: [SocialIcons, ScrollIndicator],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
