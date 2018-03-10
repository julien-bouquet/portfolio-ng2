import {Moment} from 'moment';

export class Experience {

  company ?: string;
  urlLogo ?: string;
  startDate ?: Moment;
  endDate ?: Moment;
  job ?: string;
  summary ?: string;
  description ?: string;
  technology ?: string[];
  tools ?: string[];
  methodology ?: string[];

}
