import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  exactMatch = { exact: true };
  partialMatch = { exact: false };

  links = [
    { label: 'Home', path: '/', options: this.exactMatch },
    { label: 'About', path: '/about', options: this.partialMatch },
    { label: 'Skills', path: '/skills', options: this.partialMatch },
    { label: 'Projects', path: '/projects', options: this.partialMatch },
    { label: 'Contact', path: '/contact', options: this.partialMatch },
  ];
}