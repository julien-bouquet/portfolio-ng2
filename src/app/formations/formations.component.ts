import { Component } from '@angular/core';
import { Formation } from '../models/Formation';
import * as moment from 'moment';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {

  public formations: Formation[] = [{
    startDate: moment('2016', 'YYYY'),
    endDate: moment('2018', 'YYYY'),
    details: 'Ingénierie 5ème année (Titre RNCP Niveau 1)',
    school: 'EPSI'
  }, {
    startDate: moment('2015', 'YYYY'),
    endDate: moment('2016', 'YYYY'),
    details: 'Obtention du Diplôme concepteur intégrateur DevOps (Titre RNCP Niveau 2)',
    school: 'EPSI'
  }, {
    startDate: moment('2015', 'YYYY'),
    details: 'Obtention du BTS SIO (spécialité SLAM)',
    school: 'EPSI'
  }, {
    startDate: moment('2013', 'YYYY'),
    endDate: moment('2011', 'YYYY'),
    details: 'Licence 1 MIMP (Licence Math-Informatique- Mécanique-Physique)',
    school: 'Lille 1'
  },{
    startDate: moment('2011', 'YYYY'),
    details: 'Obtention du Bac S Spécialité Physique - Chimie',
    school: 'Ste Marie - Beaucamps- Ligny'
  }];

  constructor () {
  }

}
