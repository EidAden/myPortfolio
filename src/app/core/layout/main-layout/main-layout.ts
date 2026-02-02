import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayoutComponent {}
