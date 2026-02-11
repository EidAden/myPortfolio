import { Component } from '@angular/core';
import { SocialIcons } from '../../../shared/ui/social-icons/social-icons';
import { ScrollIndicator } from '../../../shared/ui/scroll-indicator/scroll-indicator';
import { MobileMenu } from '../../../shared/ui/mobile-menu/mobile-menu';

@Component({
  selector: 'app-hero',
  imports: [SocialIcons, ScrollIndicator, MobileMenu],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  isMenuOpen = false;

  onMenuStateChange(open: boolean) {
    this.isMenuOpen = open;
  }
}
