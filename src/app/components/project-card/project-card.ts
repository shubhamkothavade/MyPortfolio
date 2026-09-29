import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Project } from '../../Models/project.model';

@Component({
  selector: 'app-project-card',

  imports: [RouterLink],

  templateUrl: './project-card.html',

  styleUrl: './project-card.scss',
})
export class ProjectCard {

  project = input.required<Project>();

}