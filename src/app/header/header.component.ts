import {Component, OnInit} from '@angular/core';
import {User} from '../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private user: User = {
    firstName: 'Julien',
    lastName: 'Bouquet',
    email: 'julien.bouquet@live.fr',
    job: 'Developpeur Full-Stack',
    about: 'Je suis étudiant en ingénerie informatique en 5ème année à l\'EPSI Lille. ' +
          'Je suis en alternance en tant que développeur full-stack pour la société ECONOCOM.',
    idGitHub: 'julien-bouquet',
    idTwitter: 'julien_bouquet'
  };

  constructor() {
  }

  ngOnInit() {
  }

}
