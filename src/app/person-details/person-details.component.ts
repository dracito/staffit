import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../people/person.service';
import { Person } from '../people/person';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  
  @Input() person: Person;

  constructor(private personService: PersonService){ }

  ngOnInit(){ }
  //<div *ngIf="item$ | async as item; else loading"> pour html
}
/*

export interface Item { name: string; }


  private itemDoc: AngularFirestoreDocument<Item>;
  item$: Observable<Item>;

  private db: AngularFirestore;
  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
    /*
    this.route.paramMap.subscribe(params => {
      this.itemDoc = afs.doc<Item>('people/1'+params.get('personId'));
      this.item$ = this.itemDoc.valueChanges();      
    });
    */
/*
  }
  
  update(item: Item) {
    this.itemDoc.update(item);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item$ = this.db.doc<Item>('people/'+params.get('personId')).valueChanges();
    });
  }

}
*/