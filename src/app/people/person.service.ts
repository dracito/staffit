import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,
 DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService{
  private peopleCollection: AngularFirestoreCollection<Person>;
  private people: Observable<any[]>;

  constructor(private db: AngularFirestore){
    this.peopleCollection = db.collection<Person>('people');
    this.people = this.getPeopleList();
  }

  createPerson(person: Person): void{
    this.peopleCollection.add({...person});
  }

  updatePerson(id: string, value: any): Promise<void>{
    return this.peopleCollection.doc(id).update(value);
  }

  deletePerson(id: string): Promise<void>{
    return this.peopleCollection.doc(id).delete();
  }

  getPerson(id: string): Person{
    const personDoc = this.peopleCollection.doc<Person>(id);
    return personDoc.valueChanges();
  }

  getPeopleList() {
    return this.peopleCollection.snapshotChanges()
      .pipe(
        map((actions => {
        return actions.map( a => {
          const data: Object = a.payload.doc.data() as Person;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      }),
    );
  }
}