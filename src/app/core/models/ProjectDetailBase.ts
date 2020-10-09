import {ModelBase} from "./ModelBase";
import {ProjectDetail} from "./ProjectDetail";

export interface ProjectDetailBase extends ModelBase{
  projects:ProjectDetail[];
}
