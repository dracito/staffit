import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  private db: AngularFirestore;
  private itemDoc: AngularFirestoreDocument<Item>;
  private item: Observable<Item>;

  constructor(
    private route: ActivatedRoute,
    db: AngularFirestore
  ){
    this.db = db;    
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = this.db.doc<Item>('people/'+params.get('personId')).valueChanges();
    });
  }
}