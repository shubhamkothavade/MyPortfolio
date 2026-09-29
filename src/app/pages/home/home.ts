import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {

  private projectService = inject(ProjectService);

  name = 'SHUBHAM R. KOTHAVADE';

  role = 'Senior Consultant | C# & ASP.NET Core';

  tagline =
    '4+ years building enterprise applications, SAP integrations, dashboards and business solutions.';

  featuredProjects = this.projectService.getAll().slice(0, 3);
}