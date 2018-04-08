import { Component } from '@angular/core';
import * as moment from 'moment';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = {
    firstName: 'Julien',
    lastName: 'Bouquet',
    email: 'julien.bouquet@live.fr',
    job: 'Developpeur Full-Stack',
    about: 'Je suis étudiant en ingénerie informatique en 5ème année à l\'EPSI Lille. ' +
    'Je suis en alternance en tant que développeur full-stack pour la société ECONOCOM.',
    idGitHub: 'julien-bouquet',
    idTwitter: 'julien_bouquet',
    idLinkedIn: 'julien-bouquet-7b609891'
  };


}
moment.locale('fr');
