import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Project } from '../projects';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-venture-projects',
  templateUrl: './venture-projects.component.html',
  styleUrls: ['./venture-projects.component.scss']
})
export class VentureProjectsComponent implements OnInit {
  projects: Project[];


  constructor(private projectsService: ProjectsService) { 
  }
  
  ngOnInit() {
    this.showProjects();
  }

  showProjects(): void {
    this.projectsService.getVentureProjects()
      .subscribe(projects => this.projects = projects)
  }

}
