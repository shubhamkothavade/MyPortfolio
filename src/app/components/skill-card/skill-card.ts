import { Component, input } from '@angular/core';
import { SkillCategory } from '../../Models/skill.model';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss',
})
export class SkillCard {
  category = input.required<SkillCategory>();
}