import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProjectDetailBase} from "../../../core/models/ProjectDetailBase";
import {ProjectDetailService} from "../../../core/services/project-detail.service";
import {MilestoneBase} from "../../../core/models/MilestoneBase";
import {MilestoneService} from "../../../core/services/milestone.service";
import {TypeFollowBase} from '../../../core/models/TypeFollowBase';
import {TypeFollowService} from '../../../core/services/type-follow.service';
import {StageTypeBase} from '../../../core/models/StageTypeBase';
import {StageService} from '../../../core/services/stage.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {

  isEdit:boolean;

  detailForm: FormGroup;
  projectDetailModel:ProjectDetailBase;
  milestoneType:MilestoneBase;
  typeFollow:TypeFollowBase;
  stageType:StageTypeBase;

  constructor(private activatedRoute:ActivatedRoute,
              private projectDetailService:ProjectDetailService,
              private milestoneService:MilestoneService,
              private stageService:StageService,
              private formBuilder:FormBuilder,
              private typeFollowService:TypeFollowService) { }

  ngOnInit(): void {
    this.projectDetailService.getProjectDetail(this.activatedRoute.snapshot.paramMap.get("id")).subscribe(
      data => {
        this.projectDetailModel = data
      });
    this.milestoneService.getMilestoneTypes().subscribe(
      data => {
        this.milestoneType = data;
      });
    this.typeFollowService.getTypeFollow().subscribe(
      data => {
        this.typeFollow = data;
      });
    this.stageService.getStageType().subscribe(
      data => {
        this.stageType = data;
      }
    );
    this.initForm();
  }

  initForm(){
    this.detailForm = this.formBuilder.group({
      title:new FormControl('',[Validators.required]),
      society:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]),
      startDate:new FormControl('',[Validators.required]),
      typeStages:new FormGroup({idStages:new FormControl('')},[Validators.required]),
      commentDev:new FormControl('',[Validators.required]),
      idTypeFollow:new FormControl('',[Validators.required]),
      dateMilestones:new FormControl('',[Validators.required]),
      milestonesType:new FormGroup({idTypeMilestones:new FormControl('',[Validators.required])})
    })
  }

  onSubmitForm(){
    let projectId = this.activatedRoute.snapshot.paramMap.get("id");
    this.projectDetailService.putProject(this.detailForm.getRawValue(),projectId);
    console.log(this.detailForm.getRawValue())
  }

  onEditMode(){
    this.isEdit = !this.isEdit;
  }

}
