import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SkillCard } from '../../components/skill-card/skill-card';
import { SkillCategory } from '../../Models/skill.model';

@Component({
  selector: 'app-skills',
  imports: [SkillCard, RouterLink],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

  categories: SkillCategory[] = [

    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'C#' },
        { name: 'ASP.NET Core MVC' },
        { name: 'ASP.NET MVC' },
        { name: 'Web API' },
        { name: 'Entity Framework Core' },
        { name: 'LINQ' },
        { name: 'Dependency Injection' },
        { name: 'JWT Authentication' },
        { name: 'Identity' },
        { name: '.NET MAUI' },
      ],
    },

    {
      title: 'Database',
      icon: '🗄️',
      skills: [
        { name: 'SQL Server' },
        { name: 'Oracle' },
        { name: 'Stored Procedures' },
        { name: 'SSMS' },
        { name: 'Oracle SQL Developer' },
      ],
    },

    {
      title: 'SAP & Integration',
      icon: '🔗',
      skills: [
        { name: 'SAP RFC/BAPI' },
        { name: 'REST APIs' },
        { name: 'Swagger' },
        { name: 'Postman' },
      ],
    },

    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'HTML' },
        { name: 'CSS / SCSS' },
        { name: 'JavaScript' },
        { name: 'Bootstrap' },
        { name: 'AJAX' },
        { name: 'Angular', learning: true },
        { name: 'TypeScript', learning: true },
      ],
    },

    {
      title: 'Architecture & Practices',
      icon: '🏗️',
      skills: [
        { name: 'Clean Architecture' },
        { name: 'Repository Pattern' },
        { name: 'Unit Testing' },
        { name: 'Code Review' },
      ],
    },

    {
      title: 'Tools & Deployment',
      icon: '🛠️',
      skills: [
        { name: 'Git' },
        { name: 'Azure DevOps' },
        { name: 'IIS Deployment' },
        { name: 'RDLC Reporting' },
      ],
    },

    {
      title: 'Professional Skills',
      icon: '🤝',
      skills: [
        { name: 'Agile Development' },
        { name: 'Requirement Analysis' },
        { name: 'Problem Solving' },
        { name: 'Client Communication' },
        { name: 'Team Collaboration' },
        { name: 'Production Support' },
        { name: 'Mentoring' },
      ],
    },

  ];
}