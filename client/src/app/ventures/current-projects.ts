import { Project } from './projects';
import { ProjectStage } from './project-status.enum'

export const CURRENT_PROJECTS: Project[] = [
  {
    "name": "Forever Bike Repair",
    "stage": ProjectStage.idea,
    "description": "We are disrupting how people buy bike repair services, by eliminating uncertainty about labor costs."
  },
  {
    "name": "Amsel Medical, Inc.",
    "stage": ProjectStage.growth,
    "description": "Amsel develops a patented blood vessel occluder that is opening new frontiers in vascular surgery."
  },
  {
    "name": "Blues Identity Systems",
    "stage": ProjectStage.startup,
    "description": "MIT Spinoff focused on enabling reflective engagement in people who use software applications and systems."
  },
  {
    "name": "Zymvol, Inc.",
    "stage": ProjectStage.growth,
    "description": " Zymvol is pioneering the field of in-silico enzyme design in a wide range of industrial applications."
  },
  {
    "name": "E25Bio, Inc.",
    "stage": ProjectStage.startup,
    "description": "MIT Engine-funded spinout focused on addressing early detection of public health threats brought by viral infections."
  },
  {
    "name": "Volute, Inc.",
    "stage": ProjectStage.startup,
    "description": "Volute commercializes their patented workflow technology to help business visualize key management processes in their organizations."
  }
]

