import { Component, OnInit } from '@angular/core';
import {Experience} from '../models/Experience';
import * as moment from 'moment';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {

  public experiences: Experience[] = [
    {
      company: 'Kiabi',
      urlLogo: '/assets/kiabi-logo.png',
      startDate: moment('20160901', 'YYYYMMDD'),
      endDate: moment(),
      job: 'Développeur Full-Stack (Alternance)',
      summary: 'Développement d\'une application web',
      // description en HTML
      description: 'Développement d\'une application de suivi de projet agile (Scrum-Kanban) et non agile. <br /> ' +
      '- Vision de l\'avancement des sprints, et du Kanban <br />' +
      '- Gestion du planning des collaborateurs <br />' +
      '- Vision de la qualité de code (TU-Sonar) <br /> ' +
      '- Vision des saisies des utilisateurs <br /> ' +
      '- Visions des statistiques globales du service <br />' +
      'Cette application est basée sur JIRA et Kiosk. Les équipes et les clients se base sur ' +
      'cette dernière pour suivre l\'avancement de leurs développements et leurs projets. ',
      technology: ['AngularJS', 'AngularX', 'JEE', 'JIRA', 'PostgreSQL'],
      methodology: ['Srum', 'Kanban']
    },
    {
      company: 'CHRU de Lille',
      urlLogo: '/assets/chru-logo.png',
      startDate: moment('20150901', 'YYYYMMDD'),
      endDate: moment('20160831', 'YYYYMMDD'),
      job: 'Développeur Web',
      summary: 'Développement d\'une application web',
      description: 'Développement d\'une application de gestion de projet, avec intégration de fichier Excel. <br />' +
      '- Découverte de la BI, avec BIRT, Business Object, Big Data',
      technology: ['JEE', 'Struts(Framework)', 'Hibernate', 'Business Object', 'BIRT', 'Oracle', 'PostgreSQL'],
      methodology: ['Cicle en V']
    },
    {
      company: 'Econocom',
      urlLogo: '/assets/econocom-logo.png',
      startDate: moment('20150901', 'YYYYMMDD'),
      endDate: moment(),
      job: 'Développeur Web (Alternance)',
      summary: 'En prestation ',
      description: '- En prestation chez Kiabi depuis Septembre 2016 <br />' +
      '- Prestation au CHRU de Lille (Septembre 2015- Septembre 2016)'
    },
    {
      company: 'CHRU de Lille',
      urlLogo: '/assets/chru-logo.png',
      startDate: moment('20150101', 'YYYYMMDD'),
      endDate: moment('20160227', 'YYYYMMDD'),
      job: 'Développeur Web',
      summary: 'Développement d\'une application web',
      description: 'Développement d’un site intranet pour faire de la gestion de projets.',
      technology: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'Javascript', 'JQuery'],
      methodology: ['Cicle en V']
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
