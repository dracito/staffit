import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Person } from '../person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  
  @Input() person: Observable<Person>;
  private personId: string;

  constructor(private route: ActivatedRoute, private personService: PersonService){ }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.personId = params.get('personId');
      this.person = this.personService.getPerson(this.personId);
    });
  }
}