import { Component, EventEmitter, Output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-mobile-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.scss',
})
export class MobileMenu {
  menuOpen = signal<boolean>(false);
  @Output() menuStateChange = new EventEmitter<boolean>();

  toggleMenu() {
    this.menuOpen.set(!this.menuOpen());
    this.menuStateChange.emit(this.menuOpen());
  }

  closeMenu() {
    this.menuOpen.set(false);
    this.menuStateChange.emit(false);
  }
}
