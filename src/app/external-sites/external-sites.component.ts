import {Component, Input, OnInit} from '@angular/core';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedinIn);

interface ExternalURL {
  name: string;
  url: string;
  icon: string[];
}

@Component({
  selector: 'app-external-sites',
  templateUrl: './external-sites.component.html',
  styleUrls: ['./external-sites.component.css']
})

export class ExternalSitesComponent implements OnInit {

 @Input() public externalURLs: ExternalURL[] = [
    {name: 'github', url: 'https://www.github.com/glenngartner', icon: ['fab', 'github']},
    {name: 'linkedIn', url: 'https://www.linkedin.com/in/glenngartner', icon: ['fab', 'linkedin-in']}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
