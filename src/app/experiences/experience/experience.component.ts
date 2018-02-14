import {Component, Input, OnInit} from '@angular/core';
import {Experience} from '../../models/Experience';
import * as moment from 'moment';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  @Input()
  public experience: Experience;

  @Input()
  public isOdd: boolean;

  public jobInProgress: boolean;

  constructor() { }

  ngOnInit() {
    this.jobInProgress = moment().diff(this.experience.endDate, 'days') === 0;
  }

}
