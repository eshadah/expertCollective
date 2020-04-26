import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { Project } from './projects';
import { CURRENT_PROJECTS } from './current-projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  ventureProjectsUrl = 'assets/data/ventures/projects.json';

  constructor(private http: HttpClient) { }

  getVentureProjects(): Observable<Project[]> {
    // now returns an Observable of Projects
    return of(CURRENT_PROJECTS)
  }

}
