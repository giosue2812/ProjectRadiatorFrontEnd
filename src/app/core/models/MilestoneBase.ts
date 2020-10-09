import {ModelBase} from "./ModelBase";
import {MilestoneType} from "./MilestoneType";

export interface MilestoneBase extends ModelBase{
  milestoneTypes:MilestoneType[];
}
