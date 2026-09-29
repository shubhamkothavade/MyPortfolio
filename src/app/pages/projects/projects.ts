import { Component, computed, inject, signal } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private service = inject(ProjectService);
  private all = this.service.getAll();

  filters = ['All', 'Web', 'Integration', 'Dashboard', 'Mobile'];
  selected = signal('All');

  visible = computed(() => {
    const f = this.selected();
    return f === 'All' ? this.all : this.all.filter(p => p.category === f);
  });
}