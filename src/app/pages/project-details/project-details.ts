import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../Models/project.model';

@Component({
  selector: 'app-project-details',
  imports: [RouterLink],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss',
})
export class ProjectDetails {

  private route = inject(ActivatedRoute);
  private projectService = inject(ProjectService);

  project: Project | undefined;

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.project = this.projectService.getById(id);
  }
}