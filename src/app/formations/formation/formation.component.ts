import { Component, Input } from '@angular/core';
import { Formation } from '../../models/Formation';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent {

  @Input()
  formation: Formation;

  constructor() { }

}
