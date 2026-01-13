import { Component } from '@angular/core';

import { WhyMe } from './why-me/why-me';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';
import { FooterComponent } from '../../core/layout/footer/footer';
import { HeaderComponent } from '../../core/layout/header/header';
import { Hero } from './hero/hero';
import { DesktopMenu } from '../../shared/ui/desktop-menu/desktop-menu';

@Component({
  selector: 'app-home',
  imports: [WhyMe, Skills, Projects, Testimonials, Contact, FooterComponent, Hero, DesktopMenu],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {}
