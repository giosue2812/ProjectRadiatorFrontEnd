import {People} from "./People";
import {Milestone} from "./Milestone";

export interface Project {
  id: number;
  title: string;
  description: string;
  society: string;
  typeStages: string;
  mettingDate?: Date;
  milestone: Milestone[];
  peoples: People[];
}
