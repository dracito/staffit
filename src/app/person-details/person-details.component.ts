import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent /*implements OnInit*/ {
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

export class Person{
  key:string;
  name:string;
  firstname:string;
  availability:Date;
  xp:number;
  ccId:string;
  skills:Array<string>;
  personTypeId:string;
  priceCategoryId:string;
  wantedSiteId:Array<string>;
  unwantedSiteId:Array<string>;
}

export class PersonService{
  private dbPath = '/people';
  peopleRefs: AngularFirestoreCollection<Person> = null;

  constructor(private db:AngularFirestore){
    this.peopleRefs = db.collection(this.dbPath);
  }

  createPerson(person: Person): void{
    this.peopleRefs.add({...person});
  }

  updatePerson(key: string, value: any): Promise<void>{
    return this.peopleRefs.doc(key).update(value);
  }

  deletePerson(key: string): Promise<void>{
    return this.peopleRefs.doc(key).delete();
  }

  getPerson(key: string): AngularFirestoreCollection<Person>{
    return this.peopleRefs.doc(key).get();
  }

  getPeopleList(): AngularFirestoreCollection<Person>{
    return this.peopleRefs;
  }
}