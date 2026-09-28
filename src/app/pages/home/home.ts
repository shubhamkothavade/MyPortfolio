import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  name = 'Shubham Kothavade';
  role = 'Software Developer | C# & ASP.NET Core';
  tagline =
    '4+ years building enterprise applications, SAP integrations and dashboards. Now adding Angular to my stack.';
}