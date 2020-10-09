import {Follow} from "./Follow";
import {Milestone} from "./Milestone";

export interface ProjectDetail {
  idProject: number;
  titre: string;
  society: string;
  description: string;
  startDate?: any;
  typeStages: string;
  typeFollows: Follow[][];
  milestone: Milestone[];
}
