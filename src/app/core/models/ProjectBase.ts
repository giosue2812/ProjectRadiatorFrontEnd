import {Project} from "./Project";

export interface ProjectBase {
  projects: Project[];
  totalProjects: number;
  status: number;
  isSucess: boolean;
  errorMessage?: any;
}


