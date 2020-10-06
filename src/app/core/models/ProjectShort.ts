import {Project} from "./Project";

export interface ProjectShort {
  projects: Project[];
  totalProjects: number;
  status: number;
  isSucess: boolean;
  errorMessage?: any;
}


