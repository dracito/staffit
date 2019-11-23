import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../people/person.service';
import { Person } from '../people/person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  
  @Input() person: Person;
  personId;

  constructor(private route: ActivatedRoute, private personService: PersonService){ }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.person = this.personService.getPerson(params.get('personId'));
      this.personId = params.get('personId');
    });
  }
}