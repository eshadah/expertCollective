import { ProjectStage } from './project-status.enum';

export interface Project {
  name: string,
  stage: ProjectStage,
  description: string
}
