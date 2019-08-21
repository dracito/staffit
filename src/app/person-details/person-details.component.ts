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
export class PersonDetailsComponent /*implements OnInit*/ {
  private itemDoc: AngularFirestoreDocument<Item>;
  item: Observable<Item>;

  private db: AngularFirestore;
  constructor(private route: ActivatedRoute, private afs: AngularFirestore) {
    this.itemDoc = afs.doc<Item>('people/1');
    this.item = this.itemDoc.valueChanges();
  }
  
  update(item: Item) {
    this.itemDoc.update(item);
  }
/*
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.item = this.db.doc<Item>('people/'+params.get('personId')).valueChanges();
    });
  }
  */
}