import {MilestoneType} from "./MilestoneType";

export interface Milestone {
  project: string;
  milestonesDate?: Date;
  milestonesType: MilestoneType[][];
}
